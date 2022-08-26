const express = require("express");

const routes = express.Router();

const mainSubCategoryControllers = require("./../controllers/mainSubCategory.controllers");

// find all main sub categories
routes.get("/", mainSubCategoryControllers.findAll);

// create new main sub category
routes.post("/", mainSubCategoryControllers.create);

// find single main sub category
routes.get("/:id", mainSubCategoryControllers.findById);

// update single main sub category
routes.put("/:id", mainSubCategoryControllers.update);

// delete single main sub category
routes.delete("/:id", mainSubCategoryControllers.delete);

module.exports = routes;
