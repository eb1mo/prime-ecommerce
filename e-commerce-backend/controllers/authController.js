const User = require("../models/User");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newPassword = await bcrypt.hash(password, 10);
    await User.create({
      username,
      email,
      password: newPassword
    });
    return res.json({
      message: "User created Successfully"
    });
  } catch (error) {
    return res.status(500).json({
      message: "User failed to create"
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect) {
    return res.json({ message: "Login Successful" });
  }

  return res.status(404).json({
    message: "User credentials are not correct"
  });
};

module.exports = { createUser, loginUser };
