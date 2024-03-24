require('dotenv').config()
const connectDb = require('./db/Connect')
const Product = require('./models/product')
const productJson = require('./product.json')

const start = async() =>{
    try{
        await connectDb(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(productJson);
        console.log("success");
    }catch(error){
        console.log(error);
    }

}
start();