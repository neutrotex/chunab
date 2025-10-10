import express from "express";
import {
    createParty,
    getAllParties,
    getParty,
    updateParty,
    deleteParty,
    togglePartyStatus
} from "../controllers/partyController.js";
import { authenticateAdmin, requirePermission } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route for getting parties (for dropdowns)
router.get("/list", getAllParties);

// All other routes require authentication and party management permission
router.use(authenticateAdmin);
router.use(requirePermission('canManageParties'));

// Party CRUD operations
router.post("/", createParty);
router.get("/", getAllParties);
router.get("/:partyId", getParty);
router.put("/:partyId", updateParty);
router.delete("/:partyId", deleteParty);
router.patch("/:partyId/toggle-status", togglePartyStatus);

export default router;
