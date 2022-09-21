"use strict";

const bannerDetails = require("../models/bannerDetails.models");

exports.findAll = function (req, res) {
  bannerDetails.findAll(function (err, bannerDetails) {
    console.log("controller");
    if (err) res.send(err);
    res.send(bannerDetails);
  });
};

exports.create = function (req, res) {
  const new_bannerDetails = new bannerDetails(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    bannerDetails.create(new_bannerDetails, function (err, bannerDetails) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Banner Details added successfully!",
        data: bannerDetails,
      });
    });
  }
};

exports.findById = function (req, res) {
  bannerDetails.findById(req.params.id, function (err, bannerDetails) {
    if (err) res.send(err);
    res.json(bannerDetails);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    bannerDetails.update(
      req.params.id,
      new bannerDetails(req.body),
      function (err, bannerDetails) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "Banner Details successfully updated",
        });
      }
    );
  }
};
exports.delete = function (req, res) {
  bannerDetails.delete(
    req.params.id,
    new bannerDetails(req.body),
    function (err, bannerDetails) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Banner Details successfully Deleted",
      });
    }
  );
};
