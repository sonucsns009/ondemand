const express = require("express");

const routes = express.Router();
const requestDetailsControllers = require("../controllers/requestDetails.controllers");

routes.get("/", requestDetailsControllers.findAll);

routes.get("/request/:id", requestDetailsControllers.findById);

module.exports = routes;
