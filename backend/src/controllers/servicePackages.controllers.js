"use strict";

const servicePackages = require("../models/servicePackages.models");

exports.findAll = function (req, res) {
  servicePackages.findAll(function (err, servicePackages) {
    console.log("controller");
    if (err) res.send(err);
    res.send(servicePackages);
  });
};

exports.create = function (req, res) {
  const new_servicePackages = new servicePackages(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    servicePackages.create(
      new_servicePackages,
      function (err, servicePackages) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "service package added successfully!",
          data: servicePackages,
        });
      }
    );
  }
};

exports.findById = function (req, res) {
  servicePackages.findById(req.params.id, function (err, servicePackages) {
    if (err) res.send(err);
    res.json(servicePackages);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    servicePackages.update(
      req.params.id,
      new servicePackages(req.body),
      function (err, servicePackages) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "service packages successfully updated",
        });
      }
    );
  }
};
exports.delete = function (req, res) {
  servicePackages.delete(
    req.params.id,
    new servicePackages(req.body),
    function (err, servicePackages) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "service packages successfully deleted",
      });
    }
  );
};
