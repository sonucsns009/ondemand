const express = require("express");

const routes = express.Router();
const requestControllers = require("../controllers/request.controllers");

// all requests
routes.get("/", requestControllers.findAll);

routes.get("/:id", requestControllers.findById);

module.exports = routes;
