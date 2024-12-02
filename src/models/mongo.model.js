const userModel = require("./user.model");
const taskModel = require("./task.model");

const models = {
  user: userModel,
  task: taskModel,
};

module.exports = { models };
