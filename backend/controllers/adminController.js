import Admin from "../models/adminModel.js";
import jwt from "jsonwebtoken";

// Generate JWT token
const generateToken = (adminId) => {
    return jwt.sign({ adminId }, process.env.JWT_SECRET || 'fallback_secret_key', {
        expiresIn: '24h'
    });
};

// Admin Registration
export const registerAdmin = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: "Admin with this email already exists"
            });
        }

        // Create new admin
        const newAdmin = new Admin({
            name,
            email,
            password,
            role: role || 'admin'
        });

        const savedAdmin = await newAdmin.save();
        const token = generateToken(savedAdmin._id);

        res.status(201).json({
            success: true,
            message: "Admin registered successfully",
            data: {
                admin: savedAdmin,
                token
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
        const admin = await Admin.findById(req.adminId);
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
