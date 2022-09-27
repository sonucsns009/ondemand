"use strict";

var dbConn = require("../../config/db.config");

var bannerDetails = function (bannerDetails) {
  this.banner_detail_id = bannerDetails.banner_detail_id;
  this.banner_id = bannerDetails.banner_id;
  this.banner_detail_title = bannerDetails.banner_detail_title;
  this.banner_detail_desc = bannerDetails.banner_detail_desc;
  this.banner_detail_image = bannerDetails.banner_detail_image;
  this.banner_detail_url = bannerDetails.banner_detail_url;
  this.banner_detail_status = bannerDetails.banner_detail_status
    ? bannerDetails.banner_detail_status
    : 1;
  this.added_date = new Date();
  this.updated_date = new Date();
};

bannerDetails.create = function (newservices, result) {
  // console.log(newservices);
  dbConn.query(
    "INSERT INTO ond_banner_details set ?",
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

bannerDetails.findAll = function (result) {
  dbConn.query(
    "Select * from ond_banner_details,ond_banner where  ond_banner.banner_id =  ond_banner_details.banner_id ",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("ond_banner_details : ", res);
        result(null, res);
      }
    }
  );
};

bannerDetails.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_banner_details where banner_detail_id=? ",
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

bannerDetails.findBanner = function (id, result) {
  dbConn.query(
    "Select * from ond_banner_details,ond_banner where  ond_banner.banner_id =  ond_banner_details.banner_id ",
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

bannerDetails.update = function (id, bannerDetails, result) {
  // console.log(bannerDetails);
  dbConn.query(
    "UPDATE ond_banner_details SET  banner_id=?,banner_detail_title=?,banner_detail_desc=?,banner_detail_image=?,banner_detail_url=?,banner_detail_status=?,updated_date=? WHERE banner_detail_id  = ?",
    [
      bannerDetails.banner_id,
      bannerDetails.banner_detail_title,
      bannerDetails.banner_detail_desc,
      bannerDetails.banner_detail_image,
      bannerDetails.banner_detail_url,
      bannerDetails.banner_detail_status,
      bannerDetails.updated_date,
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

bannerDetails.delete = function (id, bannerDetails, result) {
  dbConn.query(
    "UPDATE ond_banner_details SET banner_detail_status=?,updated_date=? WHERE banner_detail_id=?",
    [bannerDetails.banner_detail_status, bannerDetails.updated_date, id],
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

module.exports = bannerDetails;
