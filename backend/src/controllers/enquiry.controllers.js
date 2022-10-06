"use strict";

const enquiry = require("../models/enquiry.models");

exports.findAll = function (req, res) {
  enquiry.findAll(function (err, enquiry) {
    console.log("controller");
    if (err) res.send(err);
    res.send(enquiry);
  });
};

exports.create = function (req, res) {
  const new_enquiry = new enquiry(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    enquiry.create(new_enquiry, function (err, enquiry) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "enquiry send successfully",
        data: enquiry,
      });
    });
  }
};

exports.delete = function (req, res) {
  enquiry.delete(req.params.id, new enquiry(req.body), function (err, enquiry) {
    if (err) res.send(err);
    res.json({ error: false, message: "enquiry successfully deleted" });
  });
};
