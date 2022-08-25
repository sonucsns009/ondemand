const express = require("express");
const bodyParser = require("body-parser");
// create express app
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

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

app.use("/api/v1/admin", adminRoutes);

app.use((req, res, next) => {
  res.status(404).send("page not found");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});