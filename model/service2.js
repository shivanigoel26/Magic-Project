const mongoose = require("mongoose");
const validate = require("validator");
//const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");
const service2Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  sku_code: {
    type: String,
    required: true,
    unique: true,
  },

  model: {
    type: Number,
    required: true,
  },
  stock: {
    type: Boolean,
    required: true,
  },
  delivery: {
    type: Number,
    required: true,
  },
});

const Product = new mongoose.model("USERPRODUCT", service2Schema);
module.exports = Product;
