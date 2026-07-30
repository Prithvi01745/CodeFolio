import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

// Upload Image
router.post(
  "/upload",
  authMiddleware,
  upload.single("image"),
  (req, res) => {
    res.status(200).json({
      success: true,
      imageUrl: req.file.path,
    });
  }
);

// CRUD
router.get("/", authMiddleware, getProjects);
router.post("/", authMiddleware, addProject);
router.put("/:projectId", authMiddleware, updateProject);
router.delete("/:projectId", authMiddleware, deleteProject);

export default router;