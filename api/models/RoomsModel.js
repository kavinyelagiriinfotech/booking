const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const RoomsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  details: {
    type: String,
    required: true,
  },
  keyFacts: {
    type: String,
    required: true,
  },
  moreFacilities: {
    type: [String],
  },
  access: {
    type: String,
    default: false,
  },
  timing: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Rooms', RoomsSchema);
