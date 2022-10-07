"use strict";

const country = require("../models/country.models");

exports.findAll = function (req, res) {
  country.findAll(function (err, country) {
    console.log("controller");
    if (err) res.send(err);
    res.send(country);
  });
};
