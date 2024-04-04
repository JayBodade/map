const mongoose = require('mongoose');
require('dotenv').config();

const connectTodDb = async ()=>{

    mongoose.connect(process.env.DB_URL)
    .then(()=>{
    console.log('connected to database');
    }).catch((err)=>{
        console.log(err.message);
    })

}


module.exports = connectTodDb;