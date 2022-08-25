const express = require("express");

const router = express.Router();

const adminControllers = require("../controllers/admin.controllers");

router.get("/", adminControllers.findAll);

module.exports = router;
