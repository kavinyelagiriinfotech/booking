const mongoose = require("mongoose");
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        min:0, max:5
    },
    rooms: {
        type: [String]
    },
    lowestPrice: {
        type: Number,
    },
    features: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Hotel', HotelSchema);
