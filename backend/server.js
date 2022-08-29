const express = require("express");
const bodyParser = require("body-parser");
// create express app
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// multer
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

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
const serviceCategoryRoutes = require("./src/routes/serviceCategory.routes");
const serviceSubCategoryRoutes = require("./src/routes/serviceSubCategory.routes");

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/mainCategory", maincategoryRoutes);
app.use("/api/v1/mainSubCategory", mainSubCategoryRoutes);
app.use("/api/v1/services", servicesRoutes);
app.use("/api/v1/serviceCategory", serviceCategoryRoutes);
app.use("/api/v1/serviceSubCategory", serviceSubCategoryRoutes);

// file upload starts

app.post("/upload_files", upload.array("files"), uploadFiles);

function uploadFiles(req, res) {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: "Successfully uploaded files" });
}

// file upload ends

app.use((req, res, next) => {
  res.status(404).send("page not found");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
