const express = require("express");
const router = express.Router();
const Car = require('../Models/Cars');
const verify = require('./verifyToken');

// Get all cars
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch(err) {
        res.json({message: err.message});
    }
});

// Get specific car
router.get('/:id', async (req,res) => {
    try {
        const car = await Car.findById(req.params.postId);
        res.json(car);
    } catch(err) {
        res.json({message: err.message});
    }
});

// Create a new car
router.post('/', verify, async (req, res) => {
    const car = new Car({
        seatsNum: req.body.seatsNum,
        priceDay: req.body.priceDay,
        fuelType: req.body.fuelType,
        userId: req.body.userId,
    })

    try {
        const savedCar = await car.save();
        res.json(savedCar);
    } catch(err) {
        res.json({message: err.message});
    }
});

// Update the car 
router.patch('/:id', verify, async (req, res) => {
    try {
        const updatedCar = await Car.updateOne({_id: req.params}, 
            {$set: 
                { 
                    seatsNum: req.body.seatsNum,
                    priceDay: req.body.priceDay,
                    fuelType: req.body.fuelType,
                    userId: req.body.userId
                }
            });

        res.json(updatedCar);
    
    } catch (err) {
        res.json({ message: err });
    }
})

// Delete car 
router.delete('/:id', verify,async (req, res) => {
    try {
        const removedCar = await Car.remove({_id: req.params.id});
        res.json(removedCar);
    } catch(err) {
        res.json({message: err.message});
    }
})

module.exports = router;