// import mongoose from 'mongoose' ;
const mongoose = require('mongoose');

const URL='mongodb+srv://jjimenpanchal:Jimen@cluster0.13nks.mongodb.net/testing_Mongo?retryWrites=true&w=majority';
mongoose.connect(URL)
//event driven node.js
mongoose.connection.on('open',()=>{

    console.log('connection to the database successsful ');

}).on('error',(error)=>{
    console.log('unable to connect ',error);
})
