"use strict";

const mainCategory = require("../models/mainCategory.models");

exports.findAll = function (req, res) {
  mainCategory.findAll(function (err, Users) {
    console.log("controller");
    if (err) res.send(err);
    res.send(Users);
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
        message: "User added successfully!",
        data: mainCategory,
      });
    });
  }
};

exports.findById = function (req, res) {
  mainCategory.findById(req.params.id, function (err, Users) {
    if (err) res.send(err);
    res.json(Users);
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
        res.json({ error: false, message: "User successfully updated" });
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
      res.json({ error: false, message: "successfully deleted" });
    }
  );
};
