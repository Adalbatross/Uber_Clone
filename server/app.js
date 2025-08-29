const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db.js')
const userRoutes = require('./routers/user.routes.js')
const cookieParser = require('cookie-parser')

connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.get('/',(req,res)=>{
    res.send("hastalavista baby");
})
app.use('/users',userRoutes);

module.exports = app;