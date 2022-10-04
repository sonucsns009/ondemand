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

exports.updateRequestStatus = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    request.updateRequestStatus(
      req.params.id,
      new request(req.body),
      function (err, request) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "successfully updated request status",
        });
      }
    );
  }
};

exports.requestView = function (req, res) {
  request.requestView(req.params.id, function (err, request) {
    if (err) res.send(err);
    res.json(request);
  });
};
