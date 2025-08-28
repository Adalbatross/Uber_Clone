const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
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
})
userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET);
    return token;
}
userSchema.methods.comparePasssword = async function (password){
    return await bcrypt.compare(password, this.password);
}
userSchema.statics.hashPassword = async function (password) {
    return bcrypt.hash(password,10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;