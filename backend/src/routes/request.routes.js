const express = require("express");

const routes = express.Router();
const requestControllers = require("../controllers/request.controllers");

// all requests
routes.get("/", requestControllers.findAll);

// request create
// routes.post('/',requestControllers.create)

// request by id
routes.get("/:id", requestControllers.findById);

// user request status
routes.put("/updateRequestStatus/:id", requestControllers.updateRequestStatus);

// user request view
routes.get("/view/userView/:id", requestControllers.requestView);

module.exports = routes;
