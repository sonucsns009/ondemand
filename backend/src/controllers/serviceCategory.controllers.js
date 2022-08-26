"use strict";

const serviceCategory = require("../models/serviceCategory.models");

exports.findAll = function (req, res) {
  serviceCategory.findAll(function (err, serviceCategory) {
    console.log("service category controller");
    if (err) res.send(err);
    res.send(serviceCategory);
  });
};

exports.create = function (req, res) {
  const new_serviceCategory = new serviceCategory(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    serviceCategory.create(
      new_serviceCategory,
      function (err, serviceCategory) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "service Category added successfully!",
          data: serviceCategory,
        });
      }
    );
  }
};

exports.findById = function (req, res) {
  serviceCategory.findById(req.params.id, function (err, serviceCategory) {
    if (err) res.send(err);
    res.json(serviceCategory);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    serviceCategory.update(
      req.params.id,
      new serviceCategory(req.body),
      function (err, serviceCategory) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "Service category successfully updated",
        });
      }
    );
  }
};
exports.delete = function (req, res) {
  serviceCategory.delete(
    req.params.id,
    new serviceCategory(req.body),
    function (err, serviceCategory) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "service category successfully deleted",
      });
    }
  );
};
