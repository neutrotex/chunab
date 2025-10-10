import express from "express";
import {
    createLicenseKey,
    getAllLicenseKeys,
    getLicenseKey,
    updateLicenseKey,
    deleteLicenseKey,
    getAllAdmins,
    deactivateAdmin,
    getDashboardStats
} from "../controllers/superAdminController.js";
import { authenticateAdmin, authorizeAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes require super admin authentication
router.use(authenticateAdmin);
router.use(authorizeAdmin('super_admin'));

// License Key Management
router.post("/license-keys", createLicenseKey);
router.get("/license-keys", getAllLicenseKeys);
router.get("/license-keys/:keyId", getLicenseKey);
router.put("/license-keys/:keyId", updateLicenseKey);
router.delete("/license-keys/:keyId", deleteLicenseKey);

// Admin Management
router.get("/admins", getAllAdmins);
router.put("/admins/:adminId/deactivate", deactivateAdmin);

// Dashboard
router.get("/dashboard/stats", getDashboardStats);

export default router;
