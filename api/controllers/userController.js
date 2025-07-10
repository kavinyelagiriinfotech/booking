const User = require("../models/UserModel");

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const findUser = async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.id);
    res.status(200).json(foundUser);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const findAllUser = async (req, res) => {
  try {
    const users = await User.find(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

module.exports = {
  updateUser,
  deleteUser,
  findUser,
  findAllUser,
};
