const express = require("express");
const Rooms = require("../models/RoomsModel");
const { createRoom, updateRoom, deleteRoom, getRoom, getAllRoom } = require("../controllers/roomsController");

const router = express.Router();

// router.post("/:hotelId", createRoom);
router.post("/", createRoom);

router.put("/:id", updateRoom);

router.delete("/:id/:hotelId", deleteRoom);

//GetAll
router.get("/", getAllRoom);

//Get
router.get("/:id", getRoom);

module.exports = router;
