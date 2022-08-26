"use strict";

const mainSubCategory = require("../models/mainSubCategory.models");

exports.findAll = function (req, res) {
  mainSubCategory.findAll(function (err, mainSubCategory) {
    console.log("controller");
    if (err) res.send(err);
    res.send(mainSubCategory);
  });
};

exports.create = function (req, res) {
  const new_mainSubCategory = new mainSubCategory(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    mainSubCategory.create(
      new_mainSubCategory,
      function (err, mainSubCategory) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "User added successfully!",
          data: mainSubCategory,
        });
      }
    );
  }
};

exports.findById = function (req, res) {
  mainSubCategory.findById(req.params.id, function (err, mainSubCategory) {
    if (err) res.send(err);
    res.json(mainSubCategory);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    mainSubCategory.update(
      req.params.id,
      new mainSubCategory(req.body),
      function (err, mainSubCategory) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "main Sub Category successfully updated",
        });
      }
    );
  }
};
exports.delete = function (req, res) {
  mainSubCategory.delete(
    req.params.id,
    new mainSubCategory(req.body),
    function (err, mainSubCategory) {
      if (err) res.send(err);
      res.json({ error: false, message: "successfully deleted" });
    }
  );
};
