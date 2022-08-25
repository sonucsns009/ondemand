"use strict";

const Admin = require("../models/admin.model");

exports.findAll = function (req, res) {
  Admin.findAll(function (err, Admin) {
    console.log("controller");
    if (err) res.send(err);
    res.send(Admin);
  });
};
exports.login =  function(req, res) {
  
  // let username;
  // let password;
   Admin.userlogin(new Admin(req.body), function(err, Admin) {
    
      if (err)
    res.send("user not found");

      res.send(Admin); 
      //console.log("hello")

  });
  };
