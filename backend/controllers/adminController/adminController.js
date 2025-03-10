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
    res.status(400).json({ msg: err.message });
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
    const { day, workoutNames, workoutDescriptions, workoutReps, workoutSets } =
      req.body;
    if (
      !day ||
      !workoutNames ||
      !workoutDescriptions ||
      !workoutReps ||
      !req.files ||
      !workoutSets
    ) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }

    if (day < 1 || day > 90) {
      return res
        .status(400)
        .json({ msg: "Day of the workout is'nt in the range" });
    }

    // Ensure data is in array format
    const namesArray = Array.isArray(workoutNames)
      ? workoutNames
      : [workoutNames];
    const descriptionsArray = Array.isArray(workoutDescriptions)
      ? workoutDescriptions
      : [workoutDescriptions];
    const repsArray = Array.isArray(workoutReps) ? workoutReps : [workoutReps];
    const SetsArray = Array.isArray(workoutSets) ? workoutSets : [workoutSets];

    // Validate that all arrays are of the same length
    if (
      namesArray.length !== descriptionsArray.length ||
      namesArray.length !== repsArray.length ||
      namesArray.length !== req.files.length
    ) {
      return res
        .status(400)
        .json({ msg: "Mismatched workout details. Please check your input." });
    }

    // Map data correctly
    const workouts = req.files.map((file, i) => ({
      workoutName: namesArray[i],
      workoutDescription: descriptionsArray[i],
      workoutRep: repsArray[i],
      workoutSet: SetsArray[i],
      workoutImg: `/uploads/${file.filename}`,
    }));

    const workout = await Workouts.create({ day, workouts });

    res.status(200).json({ msg: `Workout Detail's added for ${workout.day}` });
  } catch (err) {
    res.status(403).json({ msg: err.message });
  }
};

module.exports = {
  addWorkout,
  day,
};
