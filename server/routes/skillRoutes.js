import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillController.js";

const router = express.Router();

router.get("/", authMiddleware, getSkills);

router.post("/", authMiddleware, addSkill);

router.put("/:skillId", authMiddleware, updateSkill);

router.delete("/:skillId", authMiddleware, deleteSkill);

export default router;