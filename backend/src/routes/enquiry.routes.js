const express = require("express");

const router = express.Router();

const enquiryControllers = require("../controllers/enquiry.controllers");

// find all enquiry
router.get("/", enquiryControllers.findAll);

// create enquiry or send enquiry

router.post("/", enquiryControllers.create);

router.delete("/:id", enquiryControllers.delete);

module.exports = router;
