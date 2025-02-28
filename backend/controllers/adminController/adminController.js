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
    const { day } = req.body;
    let workouts = [];

    if (Array.isArray(req.body["workouts[0][workoutName]"])) {
      // Handling multiple workouts
      req.body["workouts[0][workoutName]"].forEach((_, index) => {
        workouts.push({
          workoutName: req.body[`workouts[${index}][workoutName]`],
          workoutDescription:
            req.body[`workouts[${index}][workoutDescription]`],
          workoutRep: req.body[`workouts[${index}][workoutRep]`],
          workoutImg: req.files[index]
            ? `/uploads/${req.files[index].filename}`
            : null,
        });
      });
    } else {
      // Handling a single workout
      workouts.push({
        workoutName: req.body["workouts[0][workoutName]"],
        workoutDescription: req.body["workouts[0][workoutDescription]"],
        workoutRep: req.body["workouts[0][workoutRep]"],
        workoutImg: req.files[0] ? `/uploads/${req.files[0].filename}` : null,
      });
    }

    await Workouts.create({ day, workouts });

    res.json({ msg: "Workout Plan Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = {
  addWorkout,
  day,
};
