import Candidate from "../models/candidateModel.js";
import Party from "../models/partyModel.js";

// Create Candidate
export const createCandidate = async (req, res) => {
    try {
        const {
            name,
            gender,
            photoURL,
            party,
            education,
            assetsWorth,
            publicScoreRating,
            constituency,
            pastExperience,
            agendas,
            criminalRecords,
            contactInfo,
            // Additional optional fields
            position,
            electionType,
            age,
            profession,
            address,
            manifesto,
            campaignBudget,
            socialMedia,
            documents
        } = req.body;

        // Check if candidate already exists with same email (if provided)
        if (contactInfo?.email) {
            const existingCandidate = await Candidate.findOne({ 'contactInfo.email': contactInfo.email });
            if (existingCandidate) {
                return res.status(400).json({
                    success: false,
                    message: "Candidate with this email already exists"
                });
            }
        }

        // Verify party exists
        const partyExists = await Party.findById(party);
        if (!partyExists) {
            return res.status(400).json({
                success: false,
                message: "Invalid party selected"
            });
        }

        // Check for duplicate candidate in same constituency and position
        const duplicateCandidate = await Candidate.findOne({
            constituency,
            position: position || 'MP',
            electionType: electionType || 'Federal',
            isActive: true
        });

        if (duplicateCandidate) {
            return res.status(400).json({
                success: false,
                message: "A candidate already exists for this position in the same constituency"
            });
        }

        // Filter out empty strings from arrays
        const filteredAgendas = agendas ? agendas.filter(agenda => agenda.trim() !== '') : [];
        const filteredCriminalRecords = criminalRecords ? criminalRecords.filter(record => record.trim() !== '') : [];

        // Create new candidate
        const newCandidate = new Candidate({
            name,
            gender,
            photoURL,
            party,
            education,
            assetsWorth,
            publicScoreRating,
            constituency,
            pastExperience,
            agendas: filteredAgendas,
            criminalRecords: filteredCriminalRecords,
            contactInfo,
            // Additional optional fields
            position: position || 'MP',
            electionType: electionType || 'Federal',
            age,
            profession,
            address,
            manifesto,
            campaignBudget,
            socialMedia,
            documents,
            createdBy: req.adminId
        });

        const savedCandidate = await newCandidate.save();
        
        // Update party's candidate count
        await Party.findByIdAndUpdate(party, {
            $inc: { totalCandidates: 1 }
        });

        // Populate the saved candidate
        const populatedCandidate = await Candidate.findById(savedCandidate._id)
            .populate('party', 'name shortName symbol color symbolURL')
            .populate('createdBy', 'name email');

        res.status(201).json({
            success: true,
            message: "Candidate created successfully",
            data: populatedCandidate
        });

    } catch (error) {
        console.error("Error creating candidate:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get All Candidates
export const getAllCandidates = async (req, res) => {
    try {
        const { 
            page = 1, 
            limit = 10, 
            search = '', 
            party = '', 
            constituency = '', 
            position = '',
            electionType = '',
            isActive = 'all',
            isApproved = 'all'
        } = req.query;
        
        let filter = {};
        
        // Search filter
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { constituency: { $regex: search, $options: 'i' } }
            ];
        }
        
        // Party filter
        if (party) {
            filter.party = party;
        }
        
        // Constituency filter
        if (constituency) {
            filter.constituency = { $regex: constituency, $options: 'i' };
        }
        
        // Position filter
        if (position) {
            filter.position = position;
        }
        
        // Election type filter
        if (electionType) {
            filter.electionType = electionType;
        }
        
        // Active filter
        if (isActive !== 'all') {
            filter.isActive = isActive === 'true';
        }
        
        // Approval filter
        if (isApproved !== 'all') {
            filter.isApproved = isApproved === 'true';
        }

        const candidates = await Candidate.find(filter)
            .populate('party', 'name shortName symbol color symbolURL')
            .populate('createdBy', 'name email')
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await Candidate.countDocuments(filter);

        res.status(200).json({
            success: true,
            data: {
                candidates,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(total / limit),
                    totalItems: total,
                    itemsPerPage: limit
                }
            }
        });

    } catch (error) {
        console.error("Error fetching candidates:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get Single Candidate
export const getCandidate = async (req, res) => {
    try {
        const { candidateId } = req.params;
        
        const candidate = await Candidate.findById(candidateId)
            .populate('party', 'name shortName symbol color symbolURL')
            .populate('createdBy', 'name email');

        if (!candidate) {
            return res.status(404).json({
                success: false,
                message: "Candidate not found"
            });
        }

        res.status(200).json({
            success: true,
            data: candidate
        });

    } catch (error) {
        console.error("Error fetching candidate:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Update Candidate
export const updateCandidate = async (req, res) => {
    try {
        const { candidateId } = req.params;
        const updateData = req.body;

        const candidate = await Candidate.findById(candidateId);
        if (!candidate) {
            return res.status(404).json({
                success: false,
                message: "Candidate not found"
            });
        }

        // If updating party, verify it exists
        if (updateData.party) {
            const partyExists = await Party.findById(updateData.party);
            if (!partyExists) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid party selected"
                });
            }
        }

        // Check for duplicate candidate in same constituency and position
        if (updateData.constituency || updateData.position || updateData.electionType) {
            const duplicateCandidate = await Candidate.findOne({
                _id: { $ne: candidateId },
                constituency: updateData.constituency || candidate.constituency,
                position: updateData.position || candidate.position,
                electionType: updateData.electionType || candidate.electionType,
                isActive: true
            });

            if (duplicateCandidate) {
                return res.status(400).json({
                    success: false,
                    message: "A candidate already exists for this position in the same constituency"
                });
            }
        }

        const updatedCandidate = await Candidate.findByIdAndUpdate(
            candidateId,
            updateData,
            { new: true, runValidators: true }
        ).populate('party', 'name shortName symbol color symbolURL')
         .populate('createdBy', 'name email');

        res.status(200).json({
            success: true,
            message: "Candidate updated successfully",
            data: updatedCandidate
        });

    } catch (error) {
        console.error("Error updating candidate:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Delete Candidate
export const deleteCandidate = async (req, res) => {
    try {
        const { candidateId } = req.params;

        const candidate = await Candidate.findById(candidateId);
        if (!candidate) {
            return res.status(404).json({
                success: false,
                message: "Candidate not found"
            });
        }

        // Update party's candidate count
        await Party.findByIdAndUpdate(candidate.party, {
            $inc: { totalCandidates: -1 }
        });

        await Candidate.findByIdAndDelete(candidateId);

        res.status(200).json({
            success: true,
            message: "Candidate deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting candidate:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Toggle Candidate Status
export const toggleCandidateStatus = async (req, res) => {
    try {
        const { candidateId } = req.params;

        const candidate = await Candidate.findById(candidateId);
        if (!candidate) {
            return res.status(404).json({
                success: false,
                message: "Candidate not found"
            });
        }

        candidate.isActive = !candidate.isActive;
        const updatedCandidate = await candidate.save();

        res.status(200).json({
            success: true,
            message: `Candidate ${updatedCandidate.isActive ? 'activated' : 'deactivated'} successfully`,
            data: updatedCandidate
        });

    } catch (error) {
        console.error("Error toggling candidate status:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Approve/Reject Candidate
export const updateCandidateApproval = async (req, res) => {
    try {
        const { candidateId } = req.params;
        const { isApproved } = req.body;

        const candidate = await Candidate.findById(candidateId);
        if (!candidate) {
            return res.status(404).json({
                success: false,
                message: "Candidate not found"
            });
        }

        candidate.isApproved = isApproved;
        const updatedCandidate = await candidate.save();

        res.status(200).json({
            success: true,
            message: `Candidate ${isApproved ? 'approved' : 'rejected'} successfully`,
            data: updatedCandidate
        });

    } catch (error) {
        console.error("Error updating candidate approval:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get Candidates by Constituency
export const getCandidatesByConstituency = async (req, res) => {
    try {
        const { constituency } = req.params;
        const { position, electionType } = req.query;

        let filter = { 
            constituency: { $regex: constituency, $options: 'i' },
            isActive: true,
            isApproved: true
        };

        if (position) filter.position = position;
        if (electionType) filter.electionType = electionType;

        const candidates = await Candidate.find(filter)
            .populate('party', 'name shortName symbol color symbolURL')
            .sort({ name: 1 });

        res.status(200).json({
            success: true,
            data: candidates
        });

    } catch (error) {
        console.error("Error fetching candidates by constituency:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};
