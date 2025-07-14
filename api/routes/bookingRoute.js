const express = require("express");
const Booking = require("../models/BookingModel.js");
const { createBooking, updateBooking, findBooking, findAllBooking, deleteBooking } = require("../controllers/bookingController.js");

const router = express.Router();

//Create
router.post("/", createBooking);

//Update
router.put("/:id", updateBooking);

//Delete
router.delete("/:id", deleteBooking);

//Get
router.get("/:id", findBooking);

//GetAll
router.get("/", findAllBooking);

module.exports = router;
