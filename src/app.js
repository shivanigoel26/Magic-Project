const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
//const port = process.env.PORT || 4000;
app.set("port", process.env.PORT || 3000);

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection"));

app.use(express.json());
const User = require("../model/service1");
app.get("/", (req, res) => {
  res.send("hello users");
});
app.post("/users", (req, res) => {
  res.send(req.body);
  //const { name, email, phone, address, password } = req.body;
  const user = new User(req.body); //fetch all data
  user
    .save()
    .then(() => {
      res.status(201).json({ message: "registered" });
    })
    .catch((e) => {
      res.status(500).json({ error: "failed" });
    });
  //res.send("hello hello users");
});
app.post("/product", (req, res) => {
  res.send("hello products");
});
//app.listen(port, () => {
// console.log("connection at ${port}");
//});
//app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function () {
  console.log("Server started on port " + app.get("port"));
});
