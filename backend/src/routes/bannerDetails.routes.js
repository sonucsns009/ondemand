const express = require("express");

const routes = express.Router();

const bannerDetailsControllers = require("../controllers/bannerDetails.controllers");

// find all banner details
routes.get("/", bannerDetailsControllers.findAll);

// create banner details
routes.post("/", bannerDetailsControllers.create);

// single banner details
routes.get("/:id", bannerDetailsControllers.findById);

// update single banner details
routes.put("/:id", bannerDetailsControllers.update);

// delete single banner details
routes.delete("/:id", bannerDetailsControllers.delete);

module.exports = routes;
