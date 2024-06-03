const { check } = require("express-validator");

const createProjectValidationRules = [
  check("name")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Name is required and must be at least 3 characters long")
    .matches(/^[a-zA-Z0-9 ]+$/)
    .withMessage("Name can only contain letters, numbers, and spaces"),

  check("category")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Category is required and must be at least 3 characters long")
    .matches(/^[a-zA-Z0-9 ]+$/)
    .withMessage("Category can only contain letters, numbers, and spaces"),

  check("dueDate")
    .trim()
    .isISO8601()
    .toDate()
    .withMessage("Due Date is required and must be a valid date"),

  check("budget")
    .trim()
    .isFloat({ min: 0 })
    .withMessage("Budget is required and must be a positive number"),

  check("members")
    .optional()
    .custom((value, { req }) => {
      const members = Array.isArray(value) ? value : [value];

      if (!Array.isArray(members) || members.length < 1) {
        throw new Error("Members is required and must be an array");
      }

      return true;
    }),
];

module.exports = createProjectValidationRules;
