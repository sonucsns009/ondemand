const express = require("express");

const router = express.Router();

const userControllers = require("../controllers/users.controllers");

// find all users
router.get("/", userControllers.findAll);

// user login
router.post("/login", userControllers.login);

// Create a new users
router.post("/", userControllers.create);

// new user verigication
router.get("/verification", userControllers.verification);

// Retrieve a single user with id
router.get("/:id", userControllers.findById);

// Update a user with id
router.put("/:id", userControllers.update);

// Delete a user with id
router.delete("/:id", userControllers.delete);

// forgot user password
router.post("/forgotPassword", userControllers.forgotPassword);

// update user password
router.post("/updateUserPassword", userControllers.updateUserPassword);

// android apis
// user regestration
router.post("/regstration", userControllers.createRegstration);

// user otp verification
router.post("/otp_check", userControllers.userOtpCheck);

// resend otp to user
router.post("/otpForgotCode", userControllers.otpForgotCode);

module.exports = router;
