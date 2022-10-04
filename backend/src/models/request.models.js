"use strict";

var dbConn = require("./../../config/db.config");

var request = function (request) {
  this.request_id = request.request_id;
  this.user_id = request.user_id;
  this.service_id = request.service_id;
  this.package_id = request.package_id;
  this.service_amt = request.service_amt;
  this.tax_amt = request.tax_amt;
  this.offer_amt = request.offer_amt;
  this.discount = request.discount;
  this.final_amt = request.final_amt;
  this.request_status = request.request_status
    ? request.request_status
    : "pending";
  this.added_date = new Date();
  this.updated_date = new Date();
};

request.findAll = function (result) {
  dbConn.query("Select * from ond_user_request ", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("ond_service_category : ", res);
      result(null, res);
    }
  });
};

request.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_user_request where request_id=? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = request;
