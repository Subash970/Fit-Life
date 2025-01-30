const Home = async (req, res) => {
  res.json({ msg: "Server Works" });
};

const Login = async (req, res) => {};

const Signup = async (req, res) => {};

module.exports = {
  Home,
  Login,
  Signup,
};
