"use strict";

var dbConn = require("../../config/db.config");

var country = function (country) {
  this.iso = country.iso;
  this.name = country.name;
  this.nicename = country.nicename;
  this.iso3 = country.iso3;
  this.numcode = country.numcode;
  this.phonecode = country.phonecode;
};

country.findAll = function (result) {
  dbConn.query("Select * from country", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("country : ", res);
      result(null, res);
    }
  });
};

module.exports = country;
