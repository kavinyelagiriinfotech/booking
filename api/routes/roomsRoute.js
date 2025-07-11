const express = require("express");
const Rooms = require("../models/RoomsModel");
const { createRoom, updateRoom, deleteRoom, getRoom, getAllRoom } = require("../controllers/roomsController");

const router = express.Router();

router.post("/:hotelId", createRoom);

router.put("/:id", updateRoom);

router.delete("/:id/:hotelId", deleteRoom);

//Get
router.get("/", getRoom);

//GetAll
router.get("/:id", getAllRoom);

module.exports = router;
