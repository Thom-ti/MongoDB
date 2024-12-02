const express = require("express");
const app = express();

require("dotenv").config();

const mongodbConnect = require("./database/mongo");

const { models } = require("./models/mongo.model");

// connect to mongodb
mongodbConnect();

// Middleware to parse JSON
app.use(express.json());

// app.post("*", express.json());
// app.patch("*", express.json());
// app.put("*", express.json());

// create data
app.post("/", async (req, res) => {
  try {
    const { name, age } = req.body;

    await models.user.create({ name, age });

    res.status(201).json({ message: "Data created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get user data
app.get("/all", async (req, res) => {
  try {
    const data = await models.user.find({});

    res.status(200).json({ users: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// update user
app.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const user = await models.user.updateOne({ _id: id }, { name });

    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// delete user
app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await models.user.deleteOne({ _id: id });

    res.status(204).json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));
