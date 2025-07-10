const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      useremail: req.body.useremail,
      password: hash,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(501).json(err);
    console.log(`${err}`);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).send("User not found");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).send(`Invaild request`);
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(501).json(err);
    console.log(`${err}`);
  }

  const token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_KEY
  );

  const { password, isAdmin, ...Otherdetails } = user;
  res
    .cookie("access_token", token, { httpOnly: true })
    .status(200)
    .json(Otherdetails);
};

module.exports = { register, login };
