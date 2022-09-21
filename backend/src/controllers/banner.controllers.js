"use strict";

const banner = require("../models/banner.models");

exports.findAll = function (req, res) {
  banner.findAll(function (err, banner) {
    console.log("controller");
    if (err) res.send(err);
    res.send(banner);
  });
};

exports.create = function (req, res) {
  const new_banner = new banner(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    banner.create(new_banner, function (err, banner) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "banner added successfully!",
        data: banner,
      });
    });
  }
};

exports.findById = function (req, res) {
  banner.findById(req.params.id, function (err, banner) {
    if (err) res.send(err);
    res.json(banner);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    banner.update(req.params.id, new banner(req.body), function (err, banner) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "banner successfully updated",
      });
    });
  }
};
exports.delete = function (req, res) {
  banner.delete(req.params.id, new banner(req.body), function (err, banner) {
    if (err) res.send(err);
    res.json({
      error: false,
      message: "banner successfully deleted",
    });
  });
};
