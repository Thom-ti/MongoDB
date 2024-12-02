const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

module.exports = async function mongodbConnect() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connect Success");
  } catch (error) {
    console.log("Fail to connect DB", error);
  }
};
