const express = require("express");

const routes = express.Router();
const requestControllers = require("../controllers/request.controllers");

// all requests
routes.get("/", requestControllers.findAll);

routes.get("/:id", requestControllers.findById);

routes.put("/updateRequestStatus/:id", requestControllers.updateRequestStatus);

module.exports = routes;
