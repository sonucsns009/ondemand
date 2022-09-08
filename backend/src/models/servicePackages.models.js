"use strict";

var dbConn = require("./../../config/db.config");

var servicePackages = function (servicePackages) {
  this.service_id = servicePackages.service_id;
  this.service_provider_id = servicePackages.service_provider_id;
  this.store_id = servicePackages.store_id;
  this.package_name = servicePackages.package_name;
  this.package_amount = servicePackages.package_amount;
  this.package_desc = servicePackages.package_desc;
  this.status = servicePackages.status ? servicePackages.status : 1;
  this.added_date = new Date();
  this.updated_date = new Date();
};

servicePackages.create = function (newServiceCategory, result) {
  // console.log(newServiceCategory);
  dbConn.query(
    "INSERT INTO ond_service_packages set ?",
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

servicePackages.findAll = function (result) {
  dbConn.query(
    "Select * from ond_service_packages,ond_services where ond_service_packages.service_id = ond_services.service_id",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("ond_service_packages : ", res);
        result(null, res);
      }
    }
  );
};

servicePackages.findById = function (id, result) {
  dbConn.query(
    "Select * from ond_service_packages,ond_services where ond_service_packages.service_id = ond_services.service_id and package_id=?",
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

servicePackages.update = function (id, servicePackages, result) {
  dbConn.query(
    "UPDATE ond_service_packages SET  package_name=?,package_amount=?,package_desc=? WHERE package_id  = ?",
    [
      servicePackages.package_name,
      servicePackages.package_amount,
      servicePackages.package_desc,
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

servicePackages.delete = function (id, servicePackages, result) {
  dbConn.query(
    "UPDATE ond_service_packages SET status=? WHERE package_id  = ?",
    [servicePackages.status, id],
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

module.exports = servicePackages;
