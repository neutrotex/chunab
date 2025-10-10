import jwt from "jsonwebtoken";
import Admin from "../models/adminModel.js";
import LicenseKey from "../models/licenseKeyModel.js";

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
        const admin = await Admin.findById(decoded.adminId).populate('licenseKey');
        if (!admin || !admin.isActive) {
            return res.status(401).json({
                success: false,
                message: "Invalid token or admin account deactivated"
            });
        }

        // Check license key validity for non-super-admin users
        if (admin.role !== 'super_admin' && admin.licenseKey) {
            if (!admin.licenseKey.isValid()) {
                return res.status(401).json({
                    success: false,
                    message: "Your license key has expired or is inactive"
                });
            }
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

// Permission-based authorization middleware
export const requirePermission = (permission) => {
    return async (req, res, next) => {
        try {
            if (!req.admin) {
                return res.status(401).json({
                    success: false,
                    message: "Authentication required"
                });
            }

            // Super admin has all permissions
            if (req.admin.role === 'super_admin') {
                return next();
            }

            // Check license key permissions
            if (req.admin.licenseKey && req.admin.licenseKey.permissions) {
                if (req.admin.licenseKey.permissions[permission]) {
                    return next();
                }
            }

            return res.status(403).json({
                success: false,
                message: `Permission denied. Required permission: ${permission}`
            });

        } catch (error) {
            console.error("Permission middleware error:", error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    };
};

// Optional admin authentication (for routes that work with or without auth)
export const optionalAdminAuth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '') || 
                     req.cookies?.adminToken;

        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_key');
            const admin = await Admin.findById(decoded.adminId).populate('licenseKey');
            
            if (admin && admin.isActive) {
                // Check license key validity for non-super-admin users
                if (admin.role !== 'super_admin' && admin.licenseKey) {
                    if (admin.licenseKey.isValid()) {
                        req.adminId = admin._id;
                        req.admin = admin;
                    }
                } else if (admin.role === 'super_admin') {
                    req.adminId = admin._id;
                    req.admin = admin;
                }
            }
        }
        
        next();
    } catch (error) {
        // Continue without authentication for optional auth
        next();
    }
};
