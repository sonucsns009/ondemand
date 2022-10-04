const express = require("express");

const routes = express.Router();
const requestDetailsControllers = require("../controllers/requestDetails.controllers");

routes.get("/", requestDetailsControllers.findAll);

module.exports = routes;
