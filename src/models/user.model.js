const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { collection: "user", timestamps: true }
);

// create model
module.exports = mongoose.model("user", userModel);
