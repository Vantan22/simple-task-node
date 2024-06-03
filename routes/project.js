const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/is-auth");
const { upload, uploadFilesToFirebase } = require("../middleware/file-handler");
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/project");

router.post(
  "/project", // Validation rules for the request body
  authMiddleware,
  upload.array("image", 1), // Middleware for handling file uploads
  uploadFilesToFirebase,
  createProject,
);
// router.get("/project/:projectId", authMiddleware, getProject);
// router.patch("/project/:projectId", authMiddleware, updateProject);
// router.delete("/project/:projectId", authMiddleware, deleteProject);

module.exports = router;
