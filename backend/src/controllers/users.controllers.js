"use strict";
// var nodemailer = require("nodemailer");
// var sendgridTransport = require("nodemailer-sendgrid-transport");

const Users = require("../models/users.models");

// const transporter = nodemailer.createTransport(
//   sendgridTransport({
//     auth: {
//       api_key:
//         "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",
//     },
//   })
// );

exports.findAll = function (req, res) {
  Users.findAll(function (err, Users) {
    console.log("controller");
    if (err) res.send(err);
    res.send(Users);
  });
};

exports.create = function (req, res) {
  const new_User = new Users(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    // transporter.sendMail({
    //   to: "mrkamleshmore41@gmail.com",
    //   from: "self@kamleshmore.com",
    //   subject: "abcd",
    // });
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
