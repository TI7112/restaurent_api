const mongoose = require('mongoose');

const resScema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    address_line_1: String,
    address_line_2: String,
    landmark: String,
    pincode: String,
}, {
    timestamps: true
})

exports.Restaurent = mongoose.model("restaurent" , resScema);