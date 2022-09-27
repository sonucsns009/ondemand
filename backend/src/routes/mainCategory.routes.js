const express = require("express");

const routes = express.Router();

const mainCategoryControllers = require("./../controllers/mainCategory.controllers");

// find all main categories
routes.get("/", mainCategoryControllers.findAll);

// create main category
routes.post("/", mainCategoryControllers.create);

// single main category
routes.get("/:id", mainCategoryControllers.findById);

// update single main category
routes.put("/:id", mainCategoryControllers.update);

// delete single main category
routes.delete("/:id", mainCategoryControllers.delete);

// user panel main categorys
routes.get("/all/Category", mainCategoryControllers.findAllActive);

module.exports = routes;
