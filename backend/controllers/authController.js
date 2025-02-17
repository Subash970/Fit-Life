const jwt = require("jsonwebtoken");
const Users = require("../models/Users.js");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY);
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Email and Password are mandatory" });
  }

  try {
    const user = await Users.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ token, user: user.email });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const Signup = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res
      .status(400)
      .json({ msg: "Email , Name and Password are mandatory" });
  }

  try {
    const user = await Users.signup(email, name, password);
    const token = createToken(user._id);
    res.status(200).json({ token, user: user.email });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = {
  Login,
  Signup,
};
