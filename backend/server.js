require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const controller = require("./controllers/controller.js");
const authController = require("./controllers/authController.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Environment variables
dbURI = process.env.dbURI;
PORT = process.env.PORT;

//database connection
const MongoDB = async () => {
  try {
    await mongoose.connect(dbURI);
    app.listen(PORT);
    console.log("Connection established with MongoDB");
  } catch (err) {
    setTimeout(() => {
      MongoDB();
    }, 5000);
  }
};

MongoDB();

//app routes

app.get("/", controller.Home);

//auth routes
app.get("/users/signup", authController.Signup);
app.get("/users/login", authController.Login);
