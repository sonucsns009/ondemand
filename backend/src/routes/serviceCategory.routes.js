const express = require("express");

const router = express.Router();

const serviceCategoryControllers = require("../controllers/serviceCategory.controllers");

// find all service category
router.get("/", serviceCategoryControllers.findAll);

// Create a new service category
router.post("/", serviceCategoryControllers.create);

// Retrieve a single service category with id
router.get("/:id", serviceCategoryControllers.findById);

// Update a service category with id
router.put("/:id", serviceCategoryControllers.update);

// Delete a service category with id
router.delete("/:id", serviceCategoryControllers.delete);

module.exports = router;
