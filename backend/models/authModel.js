const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//user database schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//user signup function
userSchema.statics.Signup = async (email, name, password) => {
  //email , name , password check
  if (!email || !name || !password) {
    throw new Error("Email , Name and Password are mandatory!");
  }

  //existing user check
  const existingUser = this.findOne({ email });
  if (existingUser) {
    throw new Error("This Email already in use");
  }

  //create new user
  try {
    //create salt
    const salt = await bcrypt.genSalt();

    //hash password
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new password
    const user = this.create({ name, password: hashedPassword });

    return user;
  } catch (err) {
    throw new Error(err);
  }
};

//login function
userSchema.statics.Login = async (email, password) => {
  //email and password check
  if (!email || !password) {
    throw new Error("Email and Password both are mandatory!");
  }

  //existing user
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("Email has not found");
  }

  //password check
  const passwordCheck = await bcrypt.compare(password, user.password);
  if (!passwordCheck) {
    throw new Error("Incoreect Password");
  }

  return user;
};

const Users = mongoose.model("users", userSchema);
module.exports = Users;
