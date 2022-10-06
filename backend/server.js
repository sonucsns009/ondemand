const express = require("express");
const bodyParser = require("body-parser");
// create express app
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// multer
const multer = require("multer");
const usersUpload = multer({ dest: "uploads/users" });
const servicesUpload = multer({ dest: "uploads/services_img" });
const mainCategoryUpload = multer({ dest: "uploads/mainCategory" });
const mainSubCategoryUpload = multer({ dest: "uploads/mainsubCategory" });
const bannerUpload = multer({ dest: "uploads/banner" });
const bannerDetailsUpload = multer({ dest: "uploads/bannerDetails" });

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
});

const adminRoutes = require("./src/routes/admin.routes");
const usersRoutes = require("./src/routes/users.routes");
const maincategoryRoutes = require("./src/routes/mainCategory.routes");
const mainSubCategoryRoutes = require("./src/routes/mainSubCategory.routes");
const servicesRoutes = require("./src/routes/services.routes");
const servicePackagesRoutes = require("./src/routes/servicePackages.routes");
const serviceCategoryRoutes = require("./src/routes/serviceCategory.routes");
const serviceSubCategoryRoutes = require("./src/routes/serviceSubCategory.routes");
const bannerRoutes = require("./src/routes/banner.routes");
const bannerDetailsRoutes = require("./src/routes/bannerDetails.routes");
const requestRoutes = require("./src/routes/request.routes");
const requestDetailsRoutes = require("./src/routes/requestDetail.routes");

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/mainCategory", maincategoryRoutes);
app.use("/api/v1/mainSubCategory", mainSubCategoryRoutes);
app.use("/api/v1/services", servicesRoutes);
app.use("/api/v1/servicePackages", servicePackagesRoutes);
app.use("/api/v1/serviceCategory", serviceCategoryRoutes);
app.use("/api/v1/serviceSubCategory", serviceSubCategoryRoutes);
app.use("/api/v1/banner", bannerRoutes);
app.use("/api/v1/bannerDetails", bannerDetailsRoutes);
app.use("/api/v1/request", requestRoutes);
app.use("/api/v1/requestDetail", requestDetailsRoutes);

// file upload starts

//  users
app.post(
  "/api/v1/users/upload_files",
  usersUpload.array("files"),
  usersUploadFiles
);

function usersUploadFiles(req, res) {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: "Successfully upload file" });
}

//  services
app.post(
  "/api/v1/services/upload_files",
  servicesUpload.array("files"),
  servicesUploadFiles
);

function servicesUploadFiles(req, res) {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: "Successfully upload file" });
}

//  main category
app.post(
  "/api/v1/mainCategory/upload_files",
  mainCategoryUpload.array("files"),
  mainCategoryUploadFiles
);

function mainCategoryUploadFiles(req, res) {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: "Successfully upload file" });
}

//  main sub category
app.post(
  "/api/v1/mainSubCategory/upload_files",
  mainSubCategoryUpload.array("files"),
  mainSubCategoryUploadFiles
);

function mainSubCategoryUploadFiles(req, res) {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: "Successfully upload file" });
}

// bannerUpload
app.post(
  "/api/v1/banner/upload_files",
  bannerUpload.array("files"),
  bannerUploadFiles
);

function bannerUploadFiles(req, res) {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: "Successfully upload file" });
}

// banner Details Upload
app.post(
  "/api/v1/bannerDetails/upload_files",
  bannerDetailsUpload.array("files"),
  bannerDetailsUploadFiles
);

function bannerDetailsUploadFiles(req, res) {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: "Successfully upload file" });
}

// file upload ends

app.use((req, res, next) => {
  res.status(404).send("page not found");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
