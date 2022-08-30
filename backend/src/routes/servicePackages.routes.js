const express = require("express");

const routes = express.Router();

const servicePackagesControllers = require("../controllers/servicePackages.controllers");

// find all service package
routes.get("/", servicePackagesControllers.findAll);

// create service package
routes.post("/", servicePackagesControllers.create);

// single service package
routes.get("/:id", servicePackagesControllers.findById);

// update single service package
routes.put("/:id", servicePackagesControllers.update);

// delete single service package
routes.delete("/:id", servicePackagesControllers.delete);

module.exports = routes;
