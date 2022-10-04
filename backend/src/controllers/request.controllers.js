"use strict";

const request = require("../models/request.models");

exports.findAll = function (req, res) {
  request.findAll(function (err, request) {
    if (err) res.send(err);
    res.send(request);
  });
};

exports.findById = function (req, res) {
  request.findById(req.params.id, function (err, request) {
    if (err) res.send(err);
    res.json(request);
  });
};
