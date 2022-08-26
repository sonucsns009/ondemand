const express = require("express");

const routes = express.Router();

const mainSubCategoryControllers = require("./../controllers/mainSubCategory.controllers");

routes.get("/", mainSubCategoryControllers.findAll);

routes.post("/", mainSubCategoryControllers.create);

routes.get("/:id", mainSubCategoryControllers.findById);

routes.put("/:id", mainSubCategoryControllers.update);

routes.delete("/:id", mainSubCategoryControllers.delete);

module.exports = routes;
