const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/is-auth");
const { upload, uploadFilesToFirebase } = require("../middleware/file-handler");
const createTaskValidationRules = require("../validator/task/createTaskValidator");
const { validate } = require("../middleware/validators");
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");

// router.get("/task", authMiddleware, getTasks);
// router.get("/task/:taskId", authMiddleware, getTask);
router.post(
  "/task",
  authMiddleware,
  // createTaskValidationRules,
  // validate,
  upload.array("attachments", 5),
  uploadFilesToFirebase,
  createTask,
);
// router.patch("/task/:taskId", authMiddleware, updateTask);
// router.delete("/task/:taskId", authMiddleware, deleteTask);

module.exports = router;
