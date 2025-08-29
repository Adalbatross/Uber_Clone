const routes = require('../routers/captain.routes.js')
const captainService  = require('../services/captain.service.js');
const captainModel = require('../models/captain.model.js')
const {validationResult} = require('express-validator');

module.exports.registerCaptain = async(req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    const {fullname, email, password, vehicle } = req.body;
    const isCaptainAlreadyExists = await captainModel.findOne({email});
    if(isCaptainAlreadyExists){
        return res.status(400).json({
            messsage:"The captain already exists, Please use a different email"
        })
    }
    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password:hashedPassword,
        color: vehicle.color,
        vehicleType: vehicle.vehicleType,
        capacity: vehicle.capacity,
        plate: vehicle.plate
    })
    const token  = captain.generateAuthToken();

    res.status(201).json({token, captain});
}