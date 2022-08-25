"use strict";
var dbConn = require('./../../config/db.config');


const db = require("../../config/db.config");
var Admin = function (Admin) {
  this.admin_name = Admin.admin_name;
  this.username = Admin.username;
  this.admin_password = Admin.admin_password;
  this.mobile_number = Admin.mobile_number;
  this.admin_email = Admin.admin_email;
  this.user_type = Admin.user_type;
  this.status = Admin.status;
  this.subroles = Admin.subroles;
  this.admin_address = Admin.admin_address;
  this.address_lat = Admin.address_lat;
  this.address_long = Admin.address_long;
  this.dateadded = new Date();
  this.dateupdated = new Date();
};

Admin.findAll = function (result) {
  dbConn.query("Select * from ond_admin", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tbl_company : ", res);
      result(null, res);
    }
  });
};
module.exports= Admin;