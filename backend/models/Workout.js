const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: {
    type: Number,
    unique: true,
    min: 1,
    max: 90,
  },
  workouts: [
    {
      workoutName: String,
      workoutDescription: String,
      WorkoutRep: String,
      workoutImg: String,
    },
  ],
});

const Workouts = new mongoose.model("workouts", workoutSchema);
module.exports = Workouts;
