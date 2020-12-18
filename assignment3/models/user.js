const mongoose=require('mongoose');
const schema=mongoose.Schema;

const UserSchema=new schema({
    name:String,
    password:String,
    email:String,
    country:String
    // name:{type :String , required:true},
    // password:{type :String , required:true},
    // email:{type :String, required:true},
    // country:String
})

const user=mongoose.model('user',UserSchema)
module.exports=user