const express = require("express");

const router = express.Router();

const userControllers = require("../controllers/admin.controllers");

router.get("/", userControllers.findAll);

module.exports = router;
