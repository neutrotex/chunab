import Admin from "../models/adminModel.js";
import LicenseKey from "../models/licenseKeyModel.js";
import Party from "../models/partyModel.js";
import Candidate from "../models/candidateModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Generate JWT token
const generateToken = (adminId) => {
    return jwt.sign({ adminId }, process.env.JWT_SECRET || 'fallback_secret_key', {
        expiresIn: '24h'
    });
};

// Create License Key
export const createLicenseKey = async (req, res) => {
    try {
        const { expiresInDays = 30, permissions = {} } = req.body;
        
        // Generate unique license key
        let key;
        let isUnique = false;
        while (!isUnique) {
            key = LicenseKey.generateKey();
            const existingKey = await LicenseKey.findOne({ key });
            if (!existingKey) {
                isUnique = true;
            }
        }

        // Calculate expiration date
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + expiresInDays);

        // Create license key
        const licenseKey = new LicenseKey({
            key,
            createdBy: req.adminId,
            expiresAt,
            permissions: {
                canManageCandidates: permissions.canManageCandidates !== false,
                canManageParties: permissions.canManageParties !== false,
                canViewAnalytics: permissions.canViewAnalytics || false,
                canManageUsers: permissions.canManageUsers || false,
                ...permissions
            }
        });

        const savedLicenseKey = await licenseKey.save();

        res.status(201).json({
            success: true,
            message: "License key created successfully",
            data: {
                licenseKey: savedLicenseKey.key,
                expiresAt: savedLicenseKey.expiresAt,
                permissions: savedLicenseKey.permissions
            }
        });

    } catch (error) {
        console.error("Error creating license key:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get All License Keys
export const getAllLicenseKeys = async (req, res) => {
    try {
        const { page = 1, limit = 10, status = 'all' } = req.query;
        
        let filter = { createdBy: req.adminId };
        
        if (status === 'active') {
            filter.isActive = true;
            filter.isUsed = false;
            filter.expiresAt = { $gt: new Date() };
        } else if (status === 'used') {
            filter.isUsed = true;
        } else if (status === 'expired') {
            filter.expiresAt = { $lte: new Date() };
        }

        const licenseKeys = await LicenseKey.find(filter)
            .populate('assignedTo', 'name email')
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await LicenseKey.countDocuments(filter);

        res.status(200).json({
            success: true,
            data: {
                licenseKeys,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(total / limit),
                    totalItems: total,
                    itemsPerPage: limit
                }
            }
        });

    } catch (error) {
        console.error("Error fetching license keys:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get Single License Key
export const getLicenseKey = async (req, res) => {
    try {
        const { keyId } = req.params;
        
        const licenseKey = await LicenseKey.findById(keyId)
            .populate('createdBy', 'name email')
            .populate('assignedTo', 'name email');

        if (!licenseKey) {
            return res.status(404).json({
                success: false,
                message: "License key not found"
            });
        }

        res.status(200).json({
            success: true,
            data: licenseKey
        });

    } catch (error) {
        console.error("Error fetching license key:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Update License Key
export const updateLicenseKey = async (req, res) => {
    try {
        const { keyId } = req.params;
        const { isActive, permissions } = req.body;

        const licenseKey = await LicenseKey.findById(keyId);
        if (!licenseKey) {
            return res.status(404).json({
                success: false,
                message: "License key not found"
            });
        }

        if (licenseKey.createdBy.toString() !== req.adminId.toString()) {
            return res.status(403).json({
                success: false,
                message: "You can only update your own license keys"
            });
        }

        if (isActive !== undefined) licenseKey.isActive = isActive;
        if (permissions) licenseKey.permissions = { ...licenseKey.permissions, ...permissions };

        const updatedLicenseKey = await licenseKey.save();

        res.status(200).json({
            success: true,
            message: "License key updated successfully",
            data: updatedLicenseKey
        });

    } catch (error) {
        console.error("Error updating license key:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Delete License Key
export const deleteLicenseKey = async (req, res) => {
    try {
        const { keyId } = req.params;

        const licenseKey = await LicenseKey.findById(keyId);
        if (!licenseKey) {
            return res.status(404).json({
                success: false,
                message: "License key not found"
            });
        }

        if (licenseKey.createdBy.toString() !== req.adminId.toString()) {
            return res.status(403).json({
                success: false,
                message: "You can only delete your own license keys"
            });
        }

        if (licenseKey.isUsed) {
            return res.status(400).json({
                success: false,
                message: "Cannot delete a used license key"
            });
        }

        await LicenseKey.findByIdAndDelete(keyId);

        res.status(200).json({
            success: true,
            message: "License key deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting license key:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get All Admins
export const getAllAdmins = async (req, res) => {
    try {
        const { page = 1, limit = 10, role = 'all' } = req.query;
        
        let filter = {};
        if (role !== 'all') {
            filter.role = role;
        }

        const admins = await Admin.find(filter, '-password')
            .populate('licenseKey', 'key permissions isUsed expiresAt')
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await Admin.countDocuments(filter);

        res.status(200).json({
            success: true,
            data: {
                admins,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(total / limit),
                    totalItems: total,
                    itemsPerPage: limit
                }
            }
        });

    } catch (error) {
        console.error("Error fetching admins:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Deactivate Admin
export const deactivateAdmin = async (req, res) => {
    try {
        const { adminId } = req.params;

        const admin = await Admin.findById(adminId);
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }

        if (admin.role === 'super_admin') {
            return res.status(400).json({
                success: false,
                message: "Cannot deactivate super admin"
            });
        }

        admin.isActive = false;
        await admin.save();

        res.status(200).json({
            success: true,
            message: "Admin deactivated successfully"
        });

    } catch (error) {
        console.error("Error deactivating admin:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get Dashboard Stats
export const getDashboardStats = async (req, res) => {
    try {
        const totalAdmins = await Admin.countDocuments({ role: 'admin' });
        const activeAdmins = await Admin.countDocuments({ role: 'admin', isActive: true });
        const totalLicenseKeys = await LicenseKey.countDocuments({ createdBy: req.adminId });
        const activeLicenseKeys = await LicenseKey.countDocuments({ 
            createdBy: req.adminId, 
            isActive: true, 
            isUsed: false,
            expiresAt: { $gt: new Date() }
        });
        const usedLicenseKeys = await LicenseKey.countDocuments({ 
            createdBy: req.adminId, 
            isUsed: true 
        });
        const totalParties = await Party.countDocuments();
        const totalCandidates = await Candidate.countDocuments();

        res.status(200).json({
            success: true,
            data: {
                admins: {
                    total: totalAdmins,
                    active: activeAdmins,
                    inactive: totalAdmins - activeAdmins
                },
                licenseKeys: {
                    total: totalLicenseKeys,
                    active: activeLicenseKeys,
                    used: usedLicenseKeys,
                    expired: totalLicenseKeys - activeLicenseKeys - usedLicenseKeys
                },
                content: {
                    parties: totalParties,
                    candidates: totalCandidates
                }
            }
        });

    } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};
