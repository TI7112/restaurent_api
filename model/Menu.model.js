const mongoose = require('mongoose');

const menuScema = new mongoose.Schema({
    restaurent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurent'
    },
    itemname: String,
    itemthumbnail: String,
    itemprice: String,
    halfprice: String,
    quaterprice: String,
}, {
    timestamps: true
})

exports.Menu = mongoose.model("menu" , menuScema);