const Workouts = require("../models/Workout");
const Users = require("../models/Users");

const GetWorkouts = async (req, res) => {
  try {
    const email = req.email;

    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const createdAt = new Date(user.createdAt);
    const now = new Date();

    const daysPassesd = Math.floor((now - createdAt) / (1000 * 60 * 60 * 24));

    const workouts = await Workouts.findOne({
      day: daysPassesd > 0 ? daysPassesd : 1,
    });

    if (!workouts) {
      return res
        .status(400)
        .json({ msg: "Workout not found or needed to be added" });
    }

    res.status(200).json({ workouts });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = {
  GetWorkouts,
};
