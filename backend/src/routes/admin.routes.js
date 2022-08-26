const express = require("express");

const router = express.Router();

const adminControllers = require("../controllers/admin.controllers");

// find all admins
router.get("/", adminControllers.findAll);

// admin login
router.post("/login", adminControllers.login);

// Create a new admin
router.post("/", adminControllers.create);

// Retrieve a single admin with id
router.get("/:id", adminControllers.findById);

// Update a admin with id
router.put("/:id", adminControllers.update);

// Delete a admin with id
router.delete("/:id", adminControllers.delete);

module.exports = router;
