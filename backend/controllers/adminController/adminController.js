const Workouts = require("../../models/Workout");

const admins = ["2005subashk@gmail.com"];

const day = async (req, res) => {
  const email = req.email;

  if (!admins.includes(email)) {
    return res
      .status(400)
      .json({ msg: "Only admins can edit the workout plans." });
  }

  try {
    const workout = await Workouts.findOne().sort({ day: -1 });
    const workoutDay = workout ? workout.day + 1 : 1;
    res.status(200).json({ workoutDay });
  } catch (err) {
    res.status(400).json({ msg: "an error occured. please try again" });
  }
};

const addWorkout = async (req, res) => {
  const email = req.email;

  if (!admins.includes(email)) {
    return res
      .status(400)
      .json({ msg: "Only admins can edit the workout plans." });
  }

  try {
    const { day, workouts } = req.body;

    console.log(day);
    console.log(workouts);
  } catch (err) {
    res.status(400).json({ msg: "an error occured. please try again , fuck" });
  }
};

module.exports = {
  addWorkout,
  day,
};
