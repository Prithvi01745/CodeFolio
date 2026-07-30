import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  getExperience,
  addExperience,
  updateExperience,
  deleteExperience,
} from "../controllers/experienceController.js";

const router = express.Router();

router.get("/", authMiddleware, getExperience);

router.post("/", authMiddleware, addExperience);

router.put("/:experienceId", authMiddleware, updateExperience);

router.delete("/:experienceId", authMiddleware, deleteExperience);

export default router;