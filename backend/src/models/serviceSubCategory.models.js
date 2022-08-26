"use strict";

var dbConn = require("./../../config/db.config");

var serviceSubCategory = function (serviceSubCategory) {
  this.category_id = serviceSubCategory.category_id;
  this.subcategory_name = serviceSubCategory.subcategory_name;
  this.subcategory_image = serviceSubCategory.subcategory_image;
  this.status = serviceSubCategory.status ? serviceSubCategory.status : 1;
  this.added_date = new Date();
  this.updated_date = new Date();
};

serviceSubCategory.create = function (newMainSubCategory, result) {
  console.log(newMainSubCategory);
  dbConn.query(
    "INSERT INTO ond_service_subcategory set ?",
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

serviceSubCategory.findAll = function (result) {
  dbConn.query("Select * from ond_service_subcategory", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("ond_service_subcategory : ", res);
      result(null, res);
    }
  });
};

serviceSubCategory.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_service_subcategory where subcategory_id=? ",
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

serviceSubCategory.update = function (id, serviceSubCategory, result) {
  dbConn.query(
    "UPDATE ond_service_subcategory SET subcategory_name=?,subcategory_image=? WHERE subcategory_id  = ?",
    [
      serviceSubCategory.subcategory_name,
      serviceSubCategory.subcategory_image,
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

serviceSubCategory.delete = function (id, serviceSubCategory, result) {
  dbConn.query(
    "UPDATE ond_service_subcategory SET status=? WHERE subcategory_id  = ?",
    [serviceSubCategory.status, id],
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

module.exports = serviceSubCategory;
