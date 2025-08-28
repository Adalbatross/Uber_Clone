const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config();
app.use(cors());
app.get('/',(req,res)=>{
    res.send("hastalavista baby");
})

module.exports = app;