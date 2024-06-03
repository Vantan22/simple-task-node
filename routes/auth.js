const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  resetPassword,
  newPassword,
  confirmation,
} = require("../controllers/auth");
const { body } = require("express-validator");

router.post(
  "/signup",
  [
    // Validate Request
    body("fullName").isLength({ min: 3 }).withMessage("Full Name is required"),
    body("email").isEmail().withMessage("Email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password is required"),
  ],
  signup,
);

router.post(
  "/confirmation",
  [
    body("email").isEmail().withMessage("Email is required"),
    body("confirmationCode")
      .isLength({ min: 6 })
      .withMessage("Confirmation code is required"),
  ],
  confirmation,
);

router.post("/login", login);

router.post("/reset-password", resetPassword);

router.post("/new-password", newPassword);

module.exports = router;
