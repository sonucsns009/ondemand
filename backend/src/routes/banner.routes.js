const express = require("express");

const routes = express.Router();

const bannerControllers = require("../controllers/banner.controllers");

// find all banner
routes.get("/", bannerControllers.findAll);

// create banner
routes.post("/", bannerControllers.create);

// single banner
routes.get("/:id", bannerControllers.findById);

// update single banner
routes.put("/:id", bannerControllers.update);

// delete single banner
routes.delete("/:id", bannerControllers.delete);

module.exports = routes;
