import express from "express";
import { 
    registerAdmin, 
    loginAdmin, 
    getAdminProfile, 
    updateAdminProfile,
    getAdminPermissions
} from "../controllers/adminController.js";
import { authenticateAdmin, authorizeAdmin, requirePermission } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// Protected routes (require authentication)
router.get("/profile", authenticateAdmin, getAdminProfile);
router.put("/profile", authenticateAdmin, updateAdminProfile);
router.get("/permissions", authenticateAdmin, getAdminPermissions);

// Super admin only routes
router.get("/all", authenticateAdmin, authorizeAdmin('super_admin'), async (req, res) => {
    // Get all admins (super admin only)
    try {
        const Admin = (await import("../models/adminModel.js")).default;
        const admins = await Admin.find({}, '-password');
        res.json({
            success: true,
            data: admins
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching admins",
            error: error.message
        });
    }
});

export default router;
