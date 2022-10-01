"use strict";

const servicesCategory = require("../models/services.models");

exports.findAll = function (req, res) {
  servicesCategory.findAll(function (err, servicesCategory) {
    console.log("controller");
    if (err) res.send(err);
    res.send(servicesCategory);
  });
};

exports.create = function (req, res) {
  const new_services = new servicesCategory(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    servicesCategory.create(new_services, function (err, servicesCategory) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "service added successfully!",
        data: servicesCategory,
      });
    });
  }
};

exports.findById = function (req, res) {
  servicesCategory.findById(req.params.id, function (err, servicesCategory) {
    if (err) res.send(err);
    res.json(servicesCategory);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    servicesCategory.update(
      req.params.id,
      new servicesCategory(req.body),
      function (err, servicesCategory) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "service successfully updated",
        });
      }
    );
  }
};
exports.delete = function (req, res) {
  servicesCategory.delete(
    req.params.id,
    new servicesCategory(req.body),
    function (err, servicesCategory) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "service successfully deleted",
      });
    }
  );
};

exports.findByIdServ = function (req, res) {
  servicesCategory.findByIdServ(
    req.params.id,
    function (err, servicesCategory) {
      if (err) res.send(err);
      res.json(servicesCategory);
    }
  );
};
