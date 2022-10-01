"use strict";

const Admin = require("../models/admin.models");

exports.findAll = function (req, res) {
  Admin.findAll(function (err, Admin) {
    console.log("admin controller");
    if (err) res.send(err);
    res.send(Admin);
  });
};
exports.login = function (req, res) {
  // let username;
  // let password;
  Admin.adminlogin(new Admin(req.body), function (err, Admin) {
    if (err) res.send("admin not found");

    res.send(Admin);
    //console.log("hello")
  });
};

exports.create = function (req, res) {
  const new_Admin = new Admin(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Admin.create(new_Admin, function (err, Admin) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "admin added successfully!",
        data: Admin,
      });
    });
  }
};

exports.findById = function (req, res) {
  Admin.findById(req.params.id, function (err, Admin) {
    if (err) res.send(err);
    res.json(Admin);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Admin.update(req.params.id, new Admin(req.body), function (err, Admin) {
      if (err) res.send(err);
      res.json({ error: false, message: "Admin successfully updated" });
    });
  }
};

exports.delete = function (req, res) {
  Admin.delete(req.params.id, new Admin(req.body), function (err, Admin) {
    if (err) res.send(err);
    res.json({ error: false, message: "Admin successfully deleted" });
  });
};

exports.updateTax = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Admin.updateTax(req.params.id, new Admin(req.body), function (err, Admin) {
      if (err) res.send(err);
      res.json({ error: false, message: "Admin successfully update Taxs" });
    });
  }
};

exports.updateTaxType = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Admin.updateTaxType(
      req.params.id,
      new Admin(req.body),
      function (err, Admin) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "Admin successfully update Tax type",
        });
      }
    );
  }
};
