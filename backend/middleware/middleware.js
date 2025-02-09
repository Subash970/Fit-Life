const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ msg: "user must be logged in" });
  }

  try {
    const decoded = jwt.verify(authorization, process.env.SECRET_KEY);

    const user = await Users.findOne({ _id: decoded._id });

    if (!user) {
      return res.status(401).json({ msg: "user must be logged in" });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "an error occured. please try again" });
  }
};

module.exports = requireAuth;
