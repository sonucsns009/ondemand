const express = require("express");

const routes = express.Router();

const countryControllers = require("../controllers/country.controllers");

// find all country
routes.get("/", countryControllers.findAll);

module.exports = routes;
