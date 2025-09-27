import jwt from "jsonwebtoken";
import Admin from "../models/adminModel.js";

// Admin authentication middleware
export const authenticateAdmin = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '') || 
                     req.cookies?.adminToken;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access denied. No token provided."
            });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_key');
        
        // Find admin and check if still active
        const admin = await Admin.findById(decoded.adminId);
        if (!admin || !admin.isActive) {
            return res.status(401).json({
                success: false,
                message: "Invalid token or admin account deactivated"
            });
        }

        // Add admin info to request
        req.adminId = admin._id;
        req.admin = admin;
        next();

    } catch (error) {
        console.error("Auth middleware error:", error);
        res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
};

// Role-based authorization middleware
export const authorizeAdmin = (...roles) => {
    return (req, res, next) => {
        if (!req.admin) {
            return res.status(401).json({
                success: false,
                message: "Authentication required"
            });
        }

        if (!roles.includes(req.admin.role)) {
            return res.status(403).json({
                success: false,
                message: "Insufficient permissions"
            });
        }

        next();
    };
};

// Optional admin authentication (for routes that work with or without auth)
export const optionalAdminAuth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '') || 
                     req.cookies?.adminToken;

        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_key');
            const admin = await Admin.findById(decoded.adminId);
            
            if (admin && admin.isActive) {
                req.adminId = admin._id;
                req.admin = admin;
            }
        }
        
        next();
    } catch (error) {
        // Continue without authentication for optional auth
        next();
    }
};
