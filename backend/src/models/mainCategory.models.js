"use strict";

var dbConn = require("./../../config/db.config");

var mainCategory = function (mainCategory) {
  this.category_name = mainCategory.category_name;
  this.category_image = mainCategory.category_image;
  this.status = mainCategory.status ? mainCategory.status : 1;
  this.added_date = new Date();
  this.updated_date = new Date();
};

mainCategory.create = function (newMainCategory, result) {
  console.log(newMainCategory);
  dbConn.query(
    "INSERT INTO ond_main_category set ?",
    newMainCategory,
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

mainCategory.findAll = function (result) {
  dbConn.query("Select * from ond_main_category", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("ond_users : ", res);
      result(null, res);
    }
  });
};

mainCategory.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_main_category where category_id=? ",
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

mainCategory.update = function (id, mainCategory, result) {
  dbConn.query(
    "UPDATE ond_main_category SET category_name=?,category_image=? WHERE category_id  = ?",
    [mainCategory.category_name, mainCategory.category_image, id],
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

mainCategory.delete = function (id, mainCategory, result) {
  dbConn.query(
    "UPDATE ond_main_category SET status=? WHERE category_id  = ?",
    [mainCategory.status, id],
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

module.exports = mainCategory;
