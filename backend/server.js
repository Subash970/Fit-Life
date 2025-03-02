require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const upload = require("./middleware/multer.js");

const controller = require("./controllers/controller.js");
const authController = require("./controllers/authController.js");
const adminController = require("./controllers/adminController/adminController.js");

//middlewares
const requireAuth = require("./middleware/middleware.js");

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
    console.log("Retrying in 5 seconds");
    setTimeout(MongoDB, 5000);
  }
};

MongoDB();

//app routes

//auth routes
app.post("/api/users/signup", authController.Signup);
app.post("/api/users/login", authController.Login);

//admin routes
app.post(
  "/api/admin/addcredential",
  upload.array("files"),
  requireAuth,
  adminController.addWorkout
);
app.get("/api/admin/day", requireAuth, adminController.day);

//workout routes
app.get("/api/workouts", requireAuth, controller.GetWorkouts);
