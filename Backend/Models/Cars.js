const mongoose = require('mongoose');

const CarsSchema = mongoose.Schema({
    // id: String,
    seatsNum: {type: Number, min: 2 , max: 7, required: true},
    priceDay: {type: Number, required: true},
    fuelType: {type: String, required: true},
    userId: String,
})

module.exports = mongoose.model('Cars', CarsSchema);