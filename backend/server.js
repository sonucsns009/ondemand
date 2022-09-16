const express = require("express");
const bodyParser = require("body-parser");
// create express app
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

// // email starts

// var nodemailer = require("nodemailer");

// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   requireTLS: true,
//   tls: {
//     ciphers: "SSLv3",
//     rejectUnauthorized: false,
//   },

//   auth: {
//     user: "kamleshmore141414@gmail.com",
//     pass: "@1234@1234",
//   },
// });

// var mailOptions = {
//   from: "doris.anderson0@ethereal.email",
//   to: "kamleshmore41@gmail.com",
//   subject: "Sending Email using Node.js",
//   text: `Hi Smartherd, thank you for your nice Node.js tutorials.
//           I will donate 50$ for this course. Please send me payment options.`,
//   html: "<h1>Hi Smartherd</h1><p>Your Messsage</p>",
// };
//
// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

// // email ends

app.use(bodyParser.json());
// multer
const multer = require("multer");
const usersUpload = multer({ dest: "uploads/users" });
const servicesUpload = multer({ dest: "uploads/services_img" });
const mainCategoryUpload = multer({ dest: "uploads/mainCategory" });
const mainSubCategoryUpload = multer({ dest: "uploads/mainsubCategory" });

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

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/mainCategory", maincategoryRoutes);
app.use("/api/v1/mainSubCategory", mainSubCategoryRoutes);
app.use("/api/v1/services", servicesRoutes);
app.use("/api/v1/servicePackages", servicePackagesRoutes);
app.use("/api/v1/serviceCategory", serviceCategoryRoutes);
app.use("/api/v1/serviceSubCategory", serviceSubCategoryRoutes);

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

// file upload ends

app.use((req, res, next) => {
  res.status(404).send("page not found");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
