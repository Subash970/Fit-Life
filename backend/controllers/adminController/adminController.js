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
    const { day, workoutNames, workoutDescriptions, workoutReps } = req.body;
    if (!day || !workoutNames || !workoutDescriptions || !workoutReps) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }

    const workouts = req.files.map((file, i) => ({
      workoutName: workoutNames[i],
      workoutDescription: workoutDescriptions[i],
      workoutRep: workoutReps[i],
      workoutImg: `/uploads/${file.filename}`,
    }));

    console.log(workouts);

    const workout = await Workouts.create({ day, workouts });

    res.status(200).json({ msg: `Workout Detail's added for ${workout.day}` });
  } catch (err) {
    res.status(400).json({ msg: "an error occured. please try again" });
  }
};

module.exports = {
  addWorkout,
  day,
};
