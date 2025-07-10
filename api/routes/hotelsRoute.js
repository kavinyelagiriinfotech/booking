const express = require("express");
const Hotel = require("../models/HotelsModel.js");
const { createHotel, updateHotel, findHotel, findAllHotel, deleteHotel } = require("../controllers/hotelController.js");

const router = express.Router();

//Create
router.post("/", createHotel);

//Update
router.put("/:id", updateHotel);

//Delete
router.delete("/:id", deleteHotel);

//Get
router.get("/:id", findHotel);

//GetAll
router.get("/", findAllHotel);

module.exports = router;
