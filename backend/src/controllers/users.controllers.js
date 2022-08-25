"use strict";

const Users = require("../models/users.model");

exports.findAll = function (req, res) {
  Users.findAll(function (err, Users) {
    console.log("controller");
    if (err) res.send(err);
    res.send(Users);
  });
};
