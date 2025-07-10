const Hotel = require("../models/HotelsModel");

const jwt = require("jsonwebtoken");

const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const findHotel = async (req, res) => {
  try {
    const foundHotel = await Hotel.findById(req.params.id);
    res.status(200).json(foundHotel);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const findAllHotel = async (req, res) => {
  try {
    const Hotels = await Hotel.find(req.params.id);
    res.status(200).json(Hotels);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  findHotel,
  findAllHotel,
};
