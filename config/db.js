const mongoose = require("mongoose")

const database = ()=> mongoose.connect("mongodb://localhost:27017/productApi")
    .then(()=>{
        console.log('db connected');
    }).catch(err=>{
        console.log(err);
    })

module.exports = database