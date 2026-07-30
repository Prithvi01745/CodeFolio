import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getEducation,
  addEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/educationController.js";

const router = express.Router();

router.get("/", authMiddleware, getEducation);

router.post("/", authMiddleware, addEducation);

router.put("/:educationId", authMiddleware, updateEducation);

router.delete("/:educationId", authMiddleware, deleteEducation);

export default router;