"use strict";

const serviceSubCategory = require("../models/serviceSubCategory.models");

exports.findAll = function (req, res) {
  serviceSubCategory.findAll(function (err, serviceSubCategory) {
    console.log("Service controller");
    if (err) res.send(err);
    res.send(serviceSubCategory);
  });
};

exports.create = function (req, res) {
  const new_serviceSubCategory = new serviceSubCategory(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    serviceSubCategory.create(
      new_serviceSubCategory,
      function (err, serviceSubCategory) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "Service sub category added successfully!",
          data: serviceSubCategory,
        });
      }
    );
  }
};

exports.findById = function (req, res) {
  serviceSubCategory.findById(
    req.params.id,
    function (err, serviceSubCategory) {
      if (err) res.send(err);
      res.json(serviceSubCategory);
    }
  );
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    serviceSubCategory.update(
      req.params.id,
      new serviceSubCategory(req.body),
      function (err, serviceSubCategory) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "Service Sub Category successfully updated",
        });
      }
    );
  }
};
exports.delete = function (req, res) {
  serviceSubCategory.delete(
    req.params.id,
    new serviceSubCategory(req.body),
    function (err, serviceSubCategory) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Service sub category successfully deleted",
      });
    }
  );
};
