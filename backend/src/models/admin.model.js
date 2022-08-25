"use strict";

const db = require("../../config/db.config");
var Admin = function (Admin) {
  this.admin_id = Admin.admin_id;
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
