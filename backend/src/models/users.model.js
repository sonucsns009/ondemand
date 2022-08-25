"use strict";
var dbConn = require("./../../config/db.config");

var Users = function (Users) {
  this.profile_id = Users.profile_id;
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
  this.mobile_otp = Users.mobile_otp;
  this.email_code_verify = Users.email_code_verify;
  this.otp_forgot_code = Users.otp_forgot_code;
  this.user_status = Users.user_status;
  this.reg_step = Users.reg_step;
  this.utoken = Users.utoken;
  this.fcm_token = Users.fcm_token;
  this.dateadded = Users.dateadded;
  this.dateupdated = Users.dateadded;
};

Users.findAll = function (result) {
  dbConn.query("Select * from ond_users", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tbl_company : ", res);
      result(null, res);
    }
  });
};
module.exports = Users;
