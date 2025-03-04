const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//Signup
userSchema.statics.signup = async function (email, name, password) {
  if (!email || !name || !password) {
    throw new Error("Email , Name and Password are mandatory.");
  }

  const existingUser = await this.findOne({ email });

  if (existingUser) {
    throw new Error("Email already in use");
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.create({ email, name, password: hashedPassword });
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

//Login
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("Email and Password both are mandatory.");
  }

  try {
    const user = await this.findOne({ email });

    if (!user) {
      throw new Error("Email not found");
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      throw new Error("Incorrect password");
    }

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
