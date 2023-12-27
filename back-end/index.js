const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/mock-data/products.json`)
);

app.get("/api/v1/mock/products", (req, res) => {
  res.status(200).json({
    status: "success",
    data: products,
  });
});

app.listen(port, () => `App running on port ${port}`);
