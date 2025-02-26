const Workouts = require("../../models/Workout");

const addWorkout = async (req, res) => {
  const { workouts, day } = req.body;
  console.log(workouts, day);
};

module.exports = {
  addWorkout,
};
