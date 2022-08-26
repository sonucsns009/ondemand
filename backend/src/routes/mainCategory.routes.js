const express = require("express");

const routes = express.Router();

const mainCategoryControllers = require("./../controllers/mainCategory.controllers");

routes.get("/", mainCategoryControllers.findAll);
routes.post("/", mainCategoryControllers.create);

// single main category call
routes.get("/:id", mainCategoryControllers.findById);

routes.put("/:id", mainCategoryControllers.update);
routes.delete("/:id", mainCategoryControllers.delete);

module.exports = routes;
