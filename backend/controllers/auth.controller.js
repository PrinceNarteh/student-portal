const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

const register = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ error: "Email already in user" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({ ...req.body, password: hashedPassword });
  const token = generateToken(user);
  res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ error: "Invalid Credentials" });
  }

  const token = generateToken(user);
  res.status(201).json({ token });
};

module.exports = {
  register,
  login,
};
