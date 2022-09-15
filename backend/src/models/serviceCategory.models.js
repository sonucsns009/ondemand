"use strict";

var dbConn = require("./../../config/db.config");

var serviceCategory = function (serviceCategory) {
  this.category_name = serviceCategory.category_name;
  this.category_image = serviceCategory.category_image;
  this.status = serviceCategory.status ? serviceCategory.status : 1;
  this.added_date = new Date();
  this.updated_date = new Date();
};

serviceCategory.create = function (newServiceCategory, result) {
  // console.log(newServiceCategory);
  dbConn.query(
    "INSERT INTO ond_service_category set ?",
    newServiceCategory,
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

serviceCategory.findAll = function (result) {
  dbConn.query("Select * from ond_service_category", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("ond_service_category : ", res);
      result(null, res);
    }
  });
};

serviceCategory.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_service_category where category_id=? ",
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

serviceCategory.update = function (id, serviceCategory, result) {
  dbConn.query(
    "UPDATE ond_service_category SET category_name=?,category_image=?,status=?,added_date=? WHERE category_id  = ?",
    [
      serviceCategory.category_name,
      serviceCategory.category_image,
      serviceCategory.status,
      serviceCategory.added_date,
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

serviceCategory.delete = function (id, serviceCategory, result) {
  dbConn.query(
    "UPDATE ond_service_category SET status=?,added_date=? WHERE category_id  = ?",
    [serviceCategory.status, serviceCategory.added_date, id],
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

module.exports = serviceCategory;
