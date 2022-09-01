"use strict";
var dbConn = require("../../config/db.config");

var Users = function (Users) {
  this.profile_id =
    "ond_" + Math.floor(Math.random() * 1000000000000000 + Date.now());
  this.fullname = Users.fullname;
  this.emailaddress = Users.emailaddress;
  this.address = Users.address;
  this.state = Users.state;
  this.ugender = Users.ugender;
  this.dob = Users.dob;
  this.age = Users.age;
  this.country_code = Users.country_code;
  this.mobilenumber = Users.mobilenumber;
  this.upassword = Users.upassword;
  this.user_photo = Users.user_photo;
  this.country = Users.country;
  this.city = Users.city;
  this.mobile_otp = Math.floor(Math.random() * 1000000);
  this.email_code_verify = Math.floor(Math.random() * 1000000);
  this.otp_forgot_code = Math.floor(Math.random() * 1000000);
  this.user_status = Users.user_status ? Users.user_status : 1;
  this.reg_step = Users.reg_step;
  this.utoken = Users.utoken;
  this.fcm_token = Users.fcm_token;
  this.dateadded = new Date();
  this.dateupdated = new Date();
};

Users.create = function (newUsers, result) {
  // console.log(newUsers);
  dbConn.query("INSERT INTO ond_users set ?", newUsers, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Users.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_users where user_id=? ",
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

Users.userlogin = function (Users, result) {
  dbConn.query(
    "SELECT * from ond_users where mobilenumber=? and upassword=?",
    [Users.mobilenumber, Users.upassword],
    function (err, res) {
      console.log(res);

      if (res !== "") {
        result(null, res);
        console.log(res);
      } else {
        result(null, err);
      }
      //result(null, res);
    }
  );
};
Users.verification = function (Users, result) {
  console.log(Users);
  dbConn.query(
    "SELECT * from ond_users where mobilenumber=? and mobile_otp=?",
    [Users.mobilenumber, Users.mobile_otp],
    function (err, res) {
      console.log(res);

      if (res !== "") {
        result(null, res);
        console.log(res);
      } else {
        result(null, err);
      }
      //result(null, res);
    }
  );
};

Users.findAll = function (result) {
  dbConn.query("Select * from ond_users", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("ond_users : ", res);
      result(null, res);
    }
  });
};

Users.update = function (id, Users, result) {
  // console.log(Users);
  dbConn.query(
    "UPDATE ond_users SET fullname=?,upassword=?,dateupdated=? WHERE user_id  = ?",
    [Users.fullname, Users.upassword, Users.dateupdated, id],
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

Users.delete = function (id, Users, result) {
  dbConn.query(
    "UPDATE ond_users SET user_status=?,dateupdated=? WHERE user_id  = ?",
    [Users.user_status, Users.dateupdated, id],
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

module.exports = Users;
