"use strict";

var dbConn = require("./../../config/db.config");

var services = function (services) {
  this.service_id = services.service_id;
  this.category_id = services.category_id;
  this.subcategory_id = services.subcategory_id;
  this.service_name = services.service_name;
  this.service_desc = services.service_desc;
  this.service_image = services.service_image;
  this.price = services.price;
  this.discount = services.discount;
  this.coupon_code = services.coupon_code;
  this.status = services.status ? services.status : 1;
  this.added_date = new Date();
  this.updated_date = new Date();
};

services.create = function (newservices, result) {
  // console.log(newservices);
  dbConn.query(
    "INSERT INTO ond_services set ?",
    newservices,
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

services.findAll = function (result) {
  dbConn.query("Select * from ond_services", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("ond_services : ", res);
      result(null, res);
    }
  });
};

services.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_services where service_id=? ",
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

services.update = function (id, services, result) {
  // console.log(services);
  dbConn.query(
    "UPDATE ond_services SET  category_id=?,subcategory_id=?,service_name=?,service_desc=?,service_image=?,price=?,discount=?,coupon_code=?,status=?,updated_date=? WHERE service_id  = ?",
    [
      services.category_id,
      services.subcategory_id,
      services.service_name,
      services.service_desc,
      services.service_image,
      services.price,
      services.discount,
      services.coupon_code,
      services.status,
      services.updated_date,
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

services.delete = function (id, services, result) {
  dbConn.query(
    "UPDATE ond_services SET status=?,updated_date=? WHERE service_id  = ?",
    [services.status, services.updated_date, id],
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

module.exports = services;
