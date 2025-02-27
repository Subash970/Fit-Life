const Workouts = require("../../models/Workout");

const day = async (req, res) => {
  try {
    const workout = await Workouts.findOne().sort({ day: -1 });
    const workoutDay = workout ? workout.day + 1 : 1;
    res.status(200).json({ workoutDay });
  } catch (err) {
    res.status(400).json({ msg: "an error occured. please try again" });
  }
};

const addWorkout = async (req, res) => {
  const { workouts, day } = req.body;
  console.log(workouts, day);
};

module.exports = {
  addWorkout,
  day,
};
