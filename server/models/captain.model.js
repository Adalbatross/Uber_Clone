const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3,"The first name should be of maximum 3 length"]
        },
        lastname:{
            type: String,
            minlength: [3,"The first name should be of maximum 3 length"]
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "The email should have min length of 5 char"]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String
    },
    status:{
        type: String,
        enum:['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color:{
            type:String,
            required: true,
            minlength:[3, 'Color must be of 3 length in characters']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3, 'Plate must be of 3 length in characters']
        },
        capacity:{
            type: Number,
            required: true,
            minlength:[1, "Capacity should be more than equal to 1"]
        },
        vehicleType:{
            type: String,
            required:true,
            enum:['car', 'motorcycle','auto']
        }
    },
    location:{
        lat:{
            type: Number
        },
        lng:{
            type:Number
        }
    }
})

captainSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET , {expiresIn: '24h'});
    return token;
}
captainSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}
captainSchema.statics.hashPassword = async function (password) {
    return bcrypt.hash(password,10);
}
const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;