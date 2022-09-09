const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Products = new schema({
    productName: String,
    amount: Number,
    distributors:Array
},{
    
        timestamps:true
    
});

const product = mongoose.model("product", Products);
module.exports = product
