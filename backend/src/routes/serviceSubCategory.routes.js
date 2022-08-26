const express = require("express");

const routes = express.Router();

const serviceSubCategoryControllers = require("./../controllers/serviceSubCategory.controllers");

// find all service sub categories
routes.get("/", serviceSubCategoryControllers.findAll);

// create new service sub category
routes.post("/", serviceSubCategoryControllers.create);

// find single service sub category
routes.get("/:id", serviceSubCategoryControllers.findById);

// update single service sub category
routes.put("/:id", serviceSubCategoryControllers.update);

// delete single service sub category
routes.delete("/:id", serviceSubCategoryControllers.delete);

module.exports = routes;
