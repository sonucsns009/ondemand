"use strict";

const Users = require("../models/users.models");

exports.findAll = function (req, res) {
  Users.findAll(function (err, Users) {
    console.log("controller");
    if (err) res.send(err);
    res.send(Users);
  });
};

exports.create = function (req, res) {
  const new_User = new Users(req.body);

  console.log(new_User);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Users.create(new_User, function (err, Users) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "User added successfully!",
        data: Users,
      });
    });
  }
};

exports.verification = function (req, res) {
  //console.log(req.body);
  Users.verification(new Users(req.body), function (err, Users) {
    if (err) res.send("user not found");
    res.send(Users);
    //console.log("hello")
  });
};

exports.login = function (req, res) {
  //console.log(req.body);
  // let username;
  // let password;
  Users.userlogin(new Users(req.body), function (err, Users) {
    if (err) res.send("user not found");
    res.send(Users);
    //console.log("hello")
  });
};

exports.findById = function (req, res) {
  Users.findById(req.params.id, function (err, Users) {
    if (err) res.send(err);
    res.json(Users);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Users.update(req.params.id, new Users(req.body), function (err, Users) {
      if (err) res.send(err);
      res.json({ error: false, message: "User successfully updated" });
    });
  }
};
exports.delete = function (req, res) {
  Users.delete(req.params.id, new Users(req.body), function (err, Users) {
    if (err) res.send(err);
    res.json({ error: false, message: "User successfully deleted" });
  });
};

exports.forgotPassword = function (req, res) {
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Users.mobileNumber_check(new Users(req.body), function (err, UsersData) {
      if (err) req.send(err);

      if (UsersData.length > 0) {
        Users.resendOtp(new Users(req.body), function (err, UsersData1) {
          if (err) res.send(err);
          res.json({ error: false, message: "Otp Send successfully" });
        });
      } else {
        res.json({
          error: false,
          message: "Mobile number Not Exists",
        });
      }
    });
  }
};

exports.updateUserPassword = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Users.updateUserPassword(new Users(req.body), function (err, Users) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "User Password successfully updated",
      });
    });
  }
};

// android controllers

exports.createRegstration = function (req, res) {
  const new_User = new Users({
    fullname: req.body.fullname,
    emailaddress: req.body.emailaddress,
    address: "",
    state: "",
    ugender: "",
    dob: "",
    age: "",
    country_code: req.body.country_code,
    mobilenumber: req.body.mobilenumber,
    upassword: req.body.upassword,
    user_photo: "",
    country: "",
    city: "",
  });

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Users.mobileNumber_check(new_User, function (err, UsersData) {
      if (err) req.send(err);

      if (UsersData.length > 0) {
        res.json({
          error: false,
          message: "User Already Exists",
        });
      } else {
        Users.createRegestration(new_User, function (err, UsersData) {
          if (err) res.send(err);
          res.json({
            error: false,
            message: "User added successfully!",
            data: UsersData,
          });
        });
      }
    });
  }
};

exports.userOtpCheck = function (req, res) {
  Users.otp_check(new Users(req.body), function (err, Users) {
    console.log("arara" + Users);
    if (Users.length > 0) {
      if (err) res.send("user not found");

      res.json({
        error: false,
        message: "Otp matched",
        data: Users,
      });
    } else {
      res.json({
        error: false,
        message: "Otp Not Matched",
      });
    }
  });
};

exports.otpForgotCode = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Users.resendOtp(new Users(req.body), function (err, Users) {
      if (err) res.send(err);
      res.json({ error: false, message: "Otp Send successfully" });
    });
  }
};

exports.profileUpdate = function (req, res) {
  const profileUpdates = new Users(req.body);

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Users.profileUpdate(req.params.id, profileUpdates, function (err, Users) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "User Profile Updated successfully!",
      });
    });
  }
};

// pending
exports.profilePicUpdate = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Users.profilePicUpdate(
      req.params.id,
      new Users(req.body),
      function (err, Users) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "Profile Photo Updated successfully",
        });
      }
    );
  }
};
