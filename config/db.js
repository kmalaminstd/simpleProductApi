const mongoose = require("mongoose")

const database = ()=> mongoose.connect(env.process.mongodbconnection)
    .then(()=>{
        console.log('db connected');
    }).catch(err=>{
        console.log(err);
    })

module.exports = database