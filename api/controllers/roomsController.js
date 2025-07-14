const Rooms = require("../models/RoomsModel");
const Hotel = require("../models/HotelsModel");

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Rooms(req.body);
  try {
    const savedRooms = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRooms._id },
      });
      res.status(200).json(savedRooms);
    } catch (err) {
      next(err);
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const updateRoom = async (req, res) => {
  try {
    const updatedRooms = await Rooms.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRooms);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await Rooms.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Rooms data deleted");
  } catch (err) {
    res.status(500).json(err);
    console.log(`${err}`);
  }
};

const getRoom = async (req, res) => {
  try {
    const Room = await Rooms.findById(req.params.id);
    res.status(200).json(Room);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
};

const getAllRoom = async (req, res) => {
  try {
    const foundRooms = await Rooms.find(req.params.id);
    res.status(200).json(foundRooms);
    res.status(200).send(foundRooms);
  } catch (err) {
    res.status(500).json(err);
    console.log(`Here error occours ${err}`);
  }
};

module.exports = { createRoom, updateRoom, deleteRoom, getRoom, getAllRoom };
