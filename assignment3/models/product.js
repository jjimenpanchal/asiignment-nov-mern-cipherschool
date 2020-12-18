const mongoose=require('mongoose');
const schema=mongoose.Schema;

const product_schema=new schema({
    product_name:String,
    description:String,
    price:Number,
    category:String,
    quantity:Number
    // product_name:{type: String, required:true},
    // description:String,
    // price:{type: Number, required:true},
    // category:{type: String, required:true},
    // quantity:{type: Number, required:true}
})
const product=mongoose.model('product',product_schema);
module.exports=product;
