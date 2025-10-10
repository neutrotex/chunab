import express from "express";
import { 
    getAllConstituencies, 
    getAllProvinces, 
    getDistrictsByProvinceId, 
    getConstituenciesByDistrictId, 
    getBoothLocationsByConstituencyId 
} from "../controllers/constituencyController.js";

const router = express.Router();

// Public routes for constituency data
router.get("/", getAllConstituencies);
router.get("/provinces", getAllProvinces);
router.get("/provinces/:provinceId/districts", getDistrictsByProvinceId);
router.get("/provinces/:provinceId/districts/:districtId/constituencies", getConstituenciesByDistrictId);
router.get("/constituencies/:constituencyId/booth-locations", getBoothLocationsByConstituencyId);

export default router;
