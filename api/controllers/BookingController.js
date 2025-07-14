const Booking = require("../models/BookingModel");

const jwt = require("jsonwebtoken");

const createBooking = async (req, res, next) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json(savedBooking);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const updateBooking = async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBooking);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Booking has been deleted");
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const findBooking = async (req, res) => {
  try {
    const foundBooking = await Booking.findById(req.params.id);
    res.status(200).json(foundBooking);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const findAllBooking = async (req, res) => {
  try {
    const Bookings = await Booking.find(req.params.id);
    res.status(200).json(Bookings);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

module.exports = {
  createBooking,
  updateBooking,
  deleteBooking,
  findBooking,
  findAllBooking,
};
