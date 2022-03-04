const mongoose = require("mongoose");
const validate = require("validator");
//const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");
const service1Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid email");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("USER", service1Schema);
module.exports = User;
