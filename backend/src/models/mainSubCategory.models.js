"use strict";

var dbConn = require("./../../config/db.config");

var mainSubCategory = function (mainSubCategory) {
  this.category_id = mainSubCategory.category_id;
  this.subcategory_name = mainSubCategory.subcategory_name;
  this.subcategory_image = mainSubCategory.subcategory_image;
  this.status = mainSubCategory.status ? mainSubCategory.status : 1;
  this.added_date = new Date();
  this.updated_date = new Date();
};

mainSubCategory.create = function (newMainSubCategory, result) {
  // console.log(newMainSubCategory);
  dbConn.query(
    "INSERT INTO ond_main_subcategory set ?",
    newMainSubCategory,
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

mainSubCategory.findAll = function (result) {
  dbConn.query(
    "Select * from ond_main_subcategory,ond_main_category where ond_main_subcategory.category_id= ond_main_category.category_id ",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("ond_main_subcategory : ", res);
        result(null, res);
      }
    }
  );
};

mainSubCategory.findAllSubCategories = function (id, result) {
  dbConn.query(
    "Select * from ond_main_subcategory where category_id=? ",
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

mainSubCategory.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_main_subcategory where subcategory_id=? ",
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

mainSubCategory.update = function (id, mainSubCategory, result) {
  dbConn.query(
    "UPDATE ond_main_subcategory SET subcategory_name=?,subcategory_image=?,status=? ,updated_date=? WHERE subcategory_id  = ?",
    [
      mainSubCategory.subcategory_name,
      mainSubCategory.subcategory_image,
      mainSubCategory.status,
      mainSubCategory.updated_date,
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

mainSubCategory.delete = function (id, mainSubCategory, result) {
  dbConn.query(
    "UPDATE ond_main_subcategory SET status=?,updated_date=? WHERE subcategory_id  = ?",
    [mainSubCategory.status, mainSubCategory.updated_date, id],
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

module.exports = mainSubCategory;
