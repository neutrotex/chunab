import Party from "../models/partyModel.js";

// Create Party
export const createParty = async (req, res) => {
    try {
        const {
            name,
            symbolURL,
            // Additional optional fields
            shortName,
            symbol,
            symbolImage,
            color,
            description,
            foundedYear,
            leader,
            headquarters,
            ideology
        } = req.body;

        // Check if party already exists
        const existingParty = await Party.findOne({
            $or: [
                { name: { $regex: new RegExp(`^${name}$`, 'i') } },
                { shortName: shortName ? { $regex: new RegExp(`^${shortName}$`, 'i') } : null }
            ].filter(Boolean)
        });

        if (existingParty) {
            return res.status(400).json({
                success: false,
                message: "Party with this name or short name already exists"
            });
        }

        // Create new party
        const newParty = new Party({
            name,
            symbolURL,
            // Additional optional fields
            shortName,
            symbol,
            symbolImage,
            color,
            description,
            foundedYear,
            leader,
            headquarters,
            ideology,
            createdBy: req.adminId
        });

        const savedParty = await newParty.save();

        res.status(201).json({
            success: true,
            message: "Party created successfully",
            data: savedParty
        });

    } catch (error) {
        console.error("Error creating party:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get All Parties
export const getAllParties = async (req, res) => {
    try {
        const { page = 1, limit = 10, search = '', isActive = 'all' } = req.query;
        
        let filter = {};
        
        // Search filter
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { shortName: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }
        
        // Active filter
        if (isActive !== 'all') {
            filter.isActive = isActive === 'true';
        }

        const parties = await Party.find(filter)
            .populate('createdBy', 'name email')
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await Party.countDocuments(filter);

        res.status(200).json({
            success: true,
            data: {
                parties,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(total / limit),
                    totalItems: total,
                    itemsPerPage: limit
                }
            }
        });

    } catch (error) {
        console.error("Error fetching parties:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get Single Party
export const getParty = async (req, res) => {
    try {
        const { partyId } = req.params;
        
        const party = await Party.findById(partyId)
            .populate('createdBy', 'name email');

        if (!party) {
            return res.status(404).json({
                success: false,
                message: "Party not found"
            });
        }

        res.status(200).json({
            success: true,
            data: party
        });

    } catch (error) {
        console.error("Error fetching party:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Update Party
export const updateParty = async (req, res) => {
    try {
        const { partyId } = req.params;
        const updateData = req.body;

        const party = await Party.findById(partyId);
        if (!party) {
            return res.status(404).json({
                success: false,
                message: "Party not found"
            });
        }

        // Check if updating name or shortName would create duplicates
        if (updateData.name || updateData.shortName) {
            const existingParty = await Party.findOne({
                _id: { $ne: partyId },
                $or: [
                    { name: { $regex: new RegExp(`^${updateData.name || party.name}$`, 'i') } },
                    { shortName: { $regex: new RegExp(`^${updateData.shortName || party.shortName}$`, 'i') } }
                ]
            });

            if (existingParty) {
                return res.status(400).json({
                    success: false,
                    message: "Party with this name or short name already exists"
                });
            }
        }

        const updatedParty = await Party.findByIdAndUpdate(
            partyId,
            updateData,
            { new: true, runValidators: true }
        ).populate('createdBy', 'name email');

        res.status(200).json({
            success: true,
            message: "Party updated successfully",
            data: updatedParty
        });

    } catch (error) {
        console.error("Error updating party:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Delete Party
export const deleteParty = async (req, res) => {
    try {
        const { partyId } = req.params;

        const party = await Party.findById(partyId);
        if (!party) {
            return res.status(404).json({
                success: false,
                message: "Party not found"
            });
        }

        // Check if party has candidates
        const Candidate = (await import("../models/candidateModel.js")).default;
        const candidateCount = await Candidate.countDocuments({ party: partyId });
        
        if (candidateCount > 0) {
            return res.status(400).json({
                success: false,
                message: "Cannot delete party with existing candidates"
            });
        }

        await Party.findByIdAndDelete(partyId);

        res.status(200).json({
            success: true,
            message: "Party deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting party:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Toggle Party Status
export const togglePartyStatus = async (req, res) => {
    try {
        const { partyId } = req.params;

        const party = await Party.findById(partyId);
        if (!party) {
            return res.status(404).json({
                success: false,
                message: "Party not found"
            });
        }

        party.isActive = !party.isActive;
        const updatedParty = await party.save();

        res.status(200).json({
            success: true,
            message: `Party ${updatedParty.isActive ? 'activated' : 'deactivated'} successfully`,
            data: updatedParty
        });

    } catch (error) {
        console.error("Error toggling party status:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};
