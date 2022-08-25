const express = require("express");

const router = express.Router();

const userControllers = require("../controllers/users.controllers");

router.get("/", userControllers.findAll);

// user login
router.post("/login", userControllers.login);
// Create a new users
router.post("/", userControllers.create);
// Retrieve a single employee with id
router.get("/:id", userControllers.findById);
// Update a employee with id
router.put("/:id", userControllers.update);
// Delete a employee with id
router.delete("/:id", userControllers.delete);

module.exports = router;
