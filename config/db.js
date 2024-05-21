
const mongoose = require("mongoose")


const connetDB = ()=>{

    mongoose.connect(process.env.MONGODBCONNECTION)
        .then(()=>{
            console.log('db connected');
        }).catch(err=>{
            console.log(err);
        })

}

module.exports = database