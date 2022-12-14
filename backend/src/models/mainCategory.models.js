"use strict";

var dbConn = require("./../../config/db.config");

var mainCategory = function (mainCategory) {
  this.category_name = mainCategory.category_name;
  this.category_image = mainCategory.category_image;
  this.cat_status = mainCategory.cat_status ? mainCategory.cat_status : 1;
  this.added_date = new Date();
  this.updated_date = new Date();
};

mainCategory.create = function (newMainCategory, result) {
  // console.log(newMainCategory);
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
    "UPDATE ond_main_category SET category_name=?,category_image=?,updated_date=?,cat_status=? WHERE category_id  = ?",
    [
      mainCategory.category_name,
      mainCategory.category_image,
      mainCategory.updated_date,
      mainCategory.cat_status,
      id,
    ],
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
    "UPDATE ond_main_category SET cat_status=?,updated_date=? WHERE category_id  = ?",
    [mainCategory.cat_status, mainCategory.updated_date, id],
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

mainCategory.findAllActive = function (result) {
  dbConn.query(
    "Select * from ond_main_category where cat_status='active'",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("ond_users : ", res);
        result(null, res);
      }
    }
  );
};

module.exports = mainCategory;
