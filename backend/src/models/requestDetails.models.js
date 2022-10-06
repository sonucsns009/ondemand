"use strict";

var dbConn = require("./../../config/db.config");

var requestDetails = function (requestDetails) {
  this.requestDetails_id = requestDetails.requestDetails_id;
  this.request_id = requestDetails.request_id;
  this.from_date = requestDetails.from_date;
  this.to_date = requestDetails.to_date;
  this.from_time = requestDetails.from_time;
  this.to_time = requestDetails.to_time;
};

requestDetails.findAll = function (result) {
  dbConn.query("Select * from ond_user_requestdetail", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("ond_user_requestDetails : ", res);
      result(null, res);
    }
  });
};

requestDetails.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_user_requestdetail where request_id=? ",
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

module.exports = requestDetails;
