
require('dotenv').config();

const express = require('express')
const app = express();

const connectDb = require('./db/Connect');

const products_routes = require('./Routes/product');

const PORT = process.env.PORT;

app.use("/api/products" , products_routes);


const start = async()=>{
    try{
        await connectDb(process.env.MONGO_URI);
        app.listen(PORT , ()=>{
            `server started at port ${PORT}`
        })
    } catch(error){
        console.log(error);
    }
}

start();
