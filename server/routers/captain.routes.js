const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const captainController = require('../controllers/captain.controller.js')


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage("The firstName should be of minimum 3 characters"),
    body('password').isLength({min: 6}).withMessage("The password should be 6 char long"),
    body('vehicle.color').isLength({min: 3}).withMessage("The color should be of minimum 3 characters"),
    body('vehicle.vehicleType').isLength({min: 3}).withMessage("The vehicleType should be of minimum 3 characters"),
    body('vehicle.plate').isLength({min: 3}).withMessage("The firstName should be of minimum 3 characters"),
    body('vehicle.capacity').isLength({min: 1}).withMessage("The vehicle capacity should be of minimum 1 "),    
],
captainController.registerCaptain
)





module.exports = router;