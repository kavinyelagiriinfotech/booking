const express = require("express");
const Rooms = require("../models/RoomsModel");

const router = express.Router();

router.post("/", async (req, res) => {
  // res.send("At rooms route");
  const newRoom = new Rooms(req.body);
  try {
    const savedRooms = await newRoom.save();
    res.status(200).json(savedRooms);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
});

router.put("/:id", async (req, res) => {
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
});

router.delete("/:id", async (req, res) => {
    try{
    await Rooms.findByIdAndDelete(req.params.id);
    res.status(200).json("Rooms data deleted");
    } catch (err) {
        res.status(500).json(err);
    }
})

//GetAll
router.get("/", async (req, res, next) => {
  console.log("This is a rooms route");
  // return next();
  try {
    const Room = await Rooms.find(req.params.id);
    res.status(200).json(Room);
  } catch (err) {
    res.status(500).json(err);
    console.log(`This is the error ${err}`);
  }
});


router.get("/:id", async (req, res) => {
  try {
    const foundRooms = await Rooms.findById(req.params.id);
    res.status(200).json(foundRooms);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
