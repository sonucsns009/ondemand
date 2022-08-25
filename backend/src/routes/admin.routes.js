const express = require("express");

const router = express.Router();

const adminControllers = require("../controllers/admin.controllers");

router.get("/", adminControllers.findAll);
router.post("/login", adminControllers.login);

// Create a new admin
router.post("/", adminControllers.create);
// Retrieve a single admin with id
router.get("/:id", adminControllers.findById);
// Update a admin with id
router.put("/:id", adminControllers.update);
// Delete a admin with id
router.delete("/:id", adminControllers.delete);

// >>>>>>> Stashed changes
module.exports = router;
