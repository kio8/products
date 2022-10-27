const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const PORT = process.env.PORT || 4006;

const app = express();
app.use(cors());
app.use(bodyParser.json());

let productsData = fs.readFileSync("products.json");
productsData = JSON.parse(productsData);

// console.log(productsData);

app.get("/products", (req, res) => {
  res.send(productsData);
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
