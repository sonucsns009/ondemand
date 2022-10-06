"use strict";

const requestDetails = require("../models/requestDetails.models");

exports.findAll = function (req, res) {
  requestDetails.findAll(function (err, requestDetails) {
    if (err) res.send(err);
    res.send(requestDetails);
  });
};

exports.findById = function (req, res) {
  requestDetails.findById(req.params.id, function (err, requestDetails) {
    if (err) res.send(err);
    res.json(requestDetails);
  });
};
