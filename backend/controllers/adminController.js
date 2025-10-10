import Admin from "../models/adminModel.js";
import LicenseKey from "../models/licenseKeyModel.js";
import jwt from "jsonwebtoken";

// Generate JWT token
const generateToken = (adminId) => {
    return jwt.sign({ adminId }, process.env.JWT_SECRET || 'fallback_secret_key', {
        expiresIn: '24h'
    });
};

// Admin Registration with License Key
export const registerAdmin = async (req, res) => {
    try {
        const { name, email, password, licenseKey } = req.body;

        // Validate required fields
        if (!name || !email || !password || !licenseKey) {
            return res.status(400).json({
                success: false,
                message: "Name, email, password, and license key are required"
            });
        }

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: "Admin with this email already exists"
            });
        }

        // Find and validate license key
        const license = await LicenseKey.findOne({ key: licenseKey });
        if (!license) {
            return res.status(400).json({
                success: false,
                message: "Invalid license key"
            });
        }

        // Check if license key is valid and not used
        if (!license.isValid()) {
            return res.status(400).json({
                success: false,
                message: "License key is expired, inactive, or already used"
            });
        }

        // Create new admin
        const newAdmin = new Admin({
            name,
            email,
            password,
            role: 'admin',
            licenseKey: license._id
        });

        const savedAdmin = await newAdmin.save();

        // Assign license key to admin
        await license.assignToAdmin(savedAdmin._id, email);

        const token = generateToken(savedAdmin._id);

        res.status(201).json({
            success: true,
            message: "Admin registered successfully",
            data: {
                admin: savedAdmin,
                token,
                permissions: license.permissions
            }
        });

    } catch (error) {
        console.error("Error registering admin:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Admin Login
export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find admin by email
        const admin = await Admin.findOne({ email, isActive: true });
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Check password
        const isPasswordValid = await admin.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Update last login
        admin.lastLogin = new Date();
        await admin.save();

        // Generate token
        const token = generateToken(admin._id);

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                admin,
                token
            }
        });

    } catch (error) {
        console.error("Error logging in admin:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get admin profile
export const getAdminProfile = async (req, res) => {
    try {
        const admin = await Admin.findById(req.adminId).populate('licenseKey', 'permissions expiresAt isUsed');
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }

        res.status(200).json({
            success: true,
            data: admin
        });

    } catch (error) {
        console.error("Error getting admin profile:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get admin permissions
export const getAdminPermissions = async (req, res) => {
    try {
        const admin = await Admin.findById(req.adminId).populate('licenseKey', 'permissions');
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }

        let permissions = {};
        
        if (admin.role === 'super_admin') {
            permissions = {
                canManageCandidates: true,
                canManageParties: true,
                canViewAnalytics: true,
                canManageUsers: true,
                canCreateLicenseKeys: true,
                canManageAdmins: true
            };
        } else if (admin.licenseKey && admin.licenseKey.permissions) {
            permissions = admin.licenseKey.permissions;
        }

        res.status(200).json({
            success: true,
            data: {
                permissions,
                role: admin.role
            }
        });

    } catch (error) {
        console.error("Error getting admin permissions:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Update admin profile
export const updateAdminProfile = async (req, res) => {
    try {
        const { name, email } = req.body;
        const adminId = req.adminId;

        const admin = await Admin.findById(adminId);
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }

        // Update fields
        if (name) admin.name = name;
        if (email) admin.email = email;

        const updatedAdmin = await admin.save();

        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: updatedAdmin
        });

    } catch (error) {
        console.error("Error updating admin profile:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};
