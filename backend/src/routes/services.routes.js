const express = require("express");

const routes = express.Router();

const servicesControllers = require("../controllers/services.controllers");

// find all services
routes.get("/", servicesControllers.findAll);

// create services
routes.post("/", servicesControllers.create);

// single services
routes.get("/:id", servicesControllers.findById);

// update single services
routes.put("/:id", servicesControllers.update);

// delete single services
routes.delete("/:id", servicesControllers.delete);

// user panel all services by sub category
routes.get("/findByIdServ/:id", servicesControllers.findByIdServ);

module.exports = routes;
