import express from "express";
import {
    createCandidate,
    getAllCandidates,
    getCandidate,
    updateCandidate,
    deleteCandidate,
    toggleCandidateStatus,
    updateCandidateApproval,
    getCandidatesByConstituency
} from "../controllers/candidateController.js";
import { authenticateAdmin, requirePermission, optionalAdminAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route for viewing candidates by constituency
router.get("/constituency/:constituency", getCandidatesByConstituency);

// Protected routes require authentication and candidate management permission
router.use(authenticateAdmin);
router.use(requirePermission('canManageCandidates'));

// Candidate CRUD operations
router.post("/", createCandidate);
router.get("/", getAllCandidates);
router.get("/:candidateId", getCandidate);
router.put("/:candidateId", updateCandidate);
router.delete("/:candidateId", deleteCandidate);
router.patch("/:candidateId/toggle-status", toggleCandidateStatus);
router.patch("/:candidateId/approval", updateCandidateApproval);

export default router;
