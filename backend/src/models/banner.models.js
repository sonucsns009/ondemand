"use strict";

var dbConn = require("../../config/db.config");

var banner = function (banner) {
  this.banner_id = banner.banner_id;
  this.category_id = banner.category_id;
  this.subcategory_id = banner.subcategory_id;
  this.banner_title = banner.banner_title;
  this.banner_image = banner.banner_image;
  this.banner_type = banner.banner_type;
  this.banner_url = banner.banner_url;
  this.banner_status = banner.banner_status ? banner.banner_status : 1;
  this.dateadded = new Date();
  this.dateupdated = new Date();
};

banner.create = function (newservices, result) {
  // console.log(newservices);
  dbConn.query(
    "INSERT INTO ond_banner set ?",
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

banner.findAll = function (result) {
  dbConn.query(
    "Select * from ond_banner,ond_main_category,ond_main_subCategory where ond_banner.category_id = ond_main_category.category_id and ond_banner.subcategory_id = ond_main_subcategory.subcategory_id ",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("ond_banner : ", res);
        result(null, res);
      }
    }
  );
};

banner.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_banner where banner_id=? ",
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

banner.update = function (id, banner, result) {
  // console.log(banner);
  dbConn.query(
    "UPDATE ond_banner SET  category_id=?,subcategory_id=?,banner_title=?,banner_image=?,banner_type=?,banner_url=?,banner_status=?,dateupdated=? WHERE banner_id  = ?",
    [
      banner.category_id,
      banner.subcategory_id,
      banner.banner_title,
      banner.banner_image,
      banner.banner_type,
      banner.banner_url,
      banner.banner_status,
      banner.dateupdated,
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

banner.delete = function (id, banner, result) {
  dbConn.query(
    "UPDATE ond_banner SET banner_status=?,dateupdated=? WHERE banner_id  = ?",
    [banner.banner_status, banner.dateupdated, id],
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

module.exports = banner;
