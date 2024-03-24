const mongoose = require('mongoose')

const connectDb = (uri) =>{
    console.log("connect to database");
    return mongoose.connect(uri);
}

module.exports = connectDb;

