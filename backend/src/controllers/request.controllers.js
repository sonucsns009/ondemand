"use strict";

const request = require("../models/request.models");
const Admin = require("../models/admin.models");

exports.findAll = function (req, res) {
  request.findAll(function (err, request) {
    if (err) res.send(err);
    Admin.findTax((err, Admin) => {
      if (err) res.send(err);
      const { fix_tax_amt, percent_tax_amt, tax_type } = Admin[0];
      console.log(fix_tax_amt, percent_tax_amt, tax_type);
      res.send(request);
    });
  });
};

exports.create = function (req, res) {
  const new_request = new request(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    request.create(new_request, function (err, request) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "request added successfully!",
        data: request,
      });
    });
  }
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
