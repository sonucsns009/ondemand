"use strict";

var dbConn = require("../../config/db.config");

var enquiry = function (enquiry) {
  this.user_fullname = enquiry.user_fullname;
  this.user_emailaddress = enquiry.user_emailaddress;
  this.enquiry_type = enquiry.enquiry_type;
  this.user_address = enquiry.user_address;
  this.added_date = new Date();
  this.updated_date = new Date();
};

enquiry.findAll = function (result) {
  dbConn.query("Select * from ond_user_enquiry ", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("ond_enquiry : ", res);
      result(null, res);
    }
  });
};

enquiry.create = function (newUsers, result) {
  dbConn.query(
    "INSERT INTO ond_user_enquiry set ?",
    newUsers,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    }
  );
};

enquiry.delete = function (id, enquiry, result) {
  dbConn.query(
    "DELETE FROM ond_user_enquiry WHERE enquiry_id= ?",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = enquiry;
