"use strict";

var dbConn = require("./../../config/db.config");

var request = function (request) {
  this.request_id = request.request_id;
  this.user_id = request.user_id;
  this.service_id = request.service_id;
  this.package_id = request.package_id;
  this.service_amt = request.service_amt;
  this.tax_amt = request.tax_amt;
  this.offer_amt = request.offer_amt;
  this.discount = request.discount;
  this.final_amt = request.final_amt;
  this.request_status = request.request_status
    ? request.request_status
    : "Pending";
  this.request_date = new Date();
  this.added_date = new Date();
  this.updated_date = new Date();
};

request.findAll = function (result) {
  dbConn.query(
    "Select * from ond_user_request,ond_users,ond_services,ond_service_packages where ond_users.user_id=ond_user_request.user_id and ond_services.service_id= ond_user_request.service_id and ond_service_packages.package_id= ond_user_request.package_id  ",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("ond_user_request : ", res);
        result(null, res);
      }
    }
  );
};

request.create = function (newrequest, result) {
  // console.log(newrequest);
  dbConn.query("INSERT INTO ond_admin set ?", newrequest, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

request.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_user_request where request_id=? ",
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

request.updateRequestStatus = function (id, request, result) {
  dbConn.query(
    "UPDATE ond_user_request SET request_status=?,updated_date=? WHERE request_id  = ?",
    [request.request_status, request.updated_date, id],
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

request.requestView = function (id, result) {
  dbConn.query(
    "Select * from ond_user_request,ond_users,ond_services,ond_service_packages where ond_users.user_id=ond_user_request.user_id and ond_services.service_id= ond_user_request.service_id and ond_service_packages.package_id= ond_user_request.package_id and request_id=? ",
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

module.exports = request;
