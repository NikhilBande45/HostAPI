const product = require('../models/product');

const getAllProduct = async(req , res) =>{
    const myData = await product.find(req.query).select("name company");
    res.status(200).json(myData);
}

const getAllProductTesting = async(req , res) =>{

    console.log(req.query);
    const { company , name , feature , sort , select} = req.query;
    
    const queryObject = {};
    
    if(company){
        queryObject.company = company;  
    }

    if(feature)
    {
        queryObject.feature = feature;
    }

    if(name){
        queryObject.name = { $regex : name , $options : 'i'};
    }

    

    let apiData = product.find(queryObject);

    if(sort){
        let sortFix = sort.split(',').join(' ');
        apiData = apiData.sort(sortFix);
    }

    if(select){
        let selectFix = select.split(',').join(' ');
        apiData = apiData.select(selectFix);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 3;
    const skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);

    const myData = await apiData;
    res.status(200).json({myData , nbHits : myData.length});
}

module.exports = {
    getAllProduct,
    getAllProductTesting
}