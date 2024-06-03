const { body } = require("express-validator");

const createTaskValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("projectId")
    .isMongoId()
    .withMessage("Project ID is required and must be a valid MongoDB ObjectId"),
  body("assignedTo")
    .isMongoId()
    .withMessage("AssignedTo is required and must be a valid MongoDB ObjectId"),
  body("dueDate")
    .isISO8601()
    .toDate()
    .withMessage("DueDate is required and must be a valid date"),
  body("tags").optional().isArray().withMessage("Tags must be an array"),
  body("tags.*").optional().isString().withMessage("Each tag must be a string"),
  body("checklist")
    .optional()
    .isArray()
    .withMessage("Checklist must be an array"),
  body("checklist.*.text")
    .notEmpty()
    .withMessage("Checklist item text is required"),
  body("attachments")
    .optional()
    .isArray()
    .withMessage("Attachments must be an array"),
  body("attachments.*.url")
    .isString()
    .withMessage("Attachment URL is required"),
  body("attachments.*.filename")
    .isString()
    .withMessage("Attachment filename is required"),
];

module.exports = createTaskValidationRules;
