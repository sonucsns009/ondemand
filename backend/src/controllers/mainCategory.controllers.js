"use strict";

const mainCategory = require("../models/mainCategory.models");

exports.findAll = function (req, res) {
  mainCategory.findAll(function (err, mainCategory) {
    console.log("mainCategory controller");
    if (err) res.send(err);
    res.send(mainCategory);
  });
};

exports.create = function (req, res) {
  const new_mainCategory = new mainCategory(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    mainCategory.create(new_mainCategory, function (err, mainCategory) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Main Category added successfully!",
        data: mainCategory,
      });
    });
  }
};

exports.findById = function (req, res) {
  mainCategory.findById(req.params.id, function (err, mainCategory) {
    if (err) res.send(err);
    res.json(mainCategory);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    mainCategory.update(
      req.params.id,
      new mainCategory(req.body),
      function (err, mainCategory) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "Main Category successfully updated",
        });
      }
    );
  }
};
exports.delete = function (req, res) {
  mainCategory.delete(
    req.params.id,
    new mainCategory(req.body),
    function (err, mainCategory) {
      if (err) res.send(err);
      res.json({ error: false, message: "Main Category successfully deleted" });
    }
  );
};
