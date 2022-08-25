"use strict";
var dbConn = require("./../../config/db.config");

var Admin = function (Admin) {
  this.admin_name = Admin.admin_name;
  this.username = Admin.username;
  this.admin_password = Admin.admin_password;
  this.mobile_number = Admin.mobile_number;
  this.admin_email = Admin.admin_email;
  this.user_type = Admin.user_type;
  this.status = Admin.status ? Admin.status : 1;
  this.subroles = Admin.subroles;
  this.admin_address = Admin.admin_address;
  this.address_lat = Admin.address_lat;
  this.address_long = Admin.address_long;
  this.dateadded = new Date();
  this.dateupdated = new Date();
};

Admin.create = function (newAdmin, result) {
  console.log(newAdmin);
  dbConn.query("INSERT INTO ond_admin set ?", newAdmin, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Admin.findAll = function (result) {
  dbConn.query("Select * from ond_admin", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("ond_admin : ", res);
      result(null, res);
    }
  });
};

Admin.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_admin where admin_id=? ",
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

Admin.adminlogin = function (Admin, result) {
  // console.log(Admin);
  dbConn.query(
    "SELECT * from ond_admin where username=? and admin_password=?",
    [Admin.username, Admin.admin_password],
    function (err, res) {
      //console.log(res);

      if (res !== "") {
        result(null, res);
        //console.log(res);
      } else {
        result(null, err);
      }
      //result(null, res);
    }
  );
};

Admin.delete = function (id, Admin, result) {
  dbConn.query(
    "UPDATE ond_admin SET status=? WHERE admin_id  = ?",
    [Admin.status, id],
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
module.exports = Admin;
