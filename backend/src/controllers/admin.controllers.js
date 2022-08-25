"use strict";

const Admin = require("../models/admin.model");

exports.findAll = function (req, res) {
  Admin.findAll(function (err, Admin) {
    console.log("controller");
    if (err) res.send(err);
    res.send(Admin);
  });
};
