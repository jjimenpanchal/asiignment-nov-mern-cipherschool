const mongoose=require('mongoose');
const schema=mongoose.Schema;

const category_schema=new schema({
    category_name:String
    // category_name:{ type:String, required:true}
})
const category=mongoose.model('category',category_schema);
module.exports=category;
