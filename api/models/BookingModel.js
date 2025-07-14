const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const BookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  adults: {
    type: Number,
    required: true,
  },
  children: {
    type: Number,
  },
  specialRequests: {
    type: Boolean,
  },
  locationFrom: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  visitPurpose: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: Number,
  },
});

module.exports = mongoose.model('Booking', BookingSchema);
