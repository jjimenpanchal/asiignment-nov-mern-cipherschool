const assert =require('assert');
const user=require('../models/user');
describe('reading data',()=>{
    let newuser;
    newuser=user({
        name:'jimen',
        password:'1234',
        email:'jjimen@gmail.com',
        country:'india'
    })
    newuser.save()
    
    it('it finds one record form db',(done)=>{
        user.findOne({name:'jimen'}).then((data)=>{
            console.log(data);
            assert(data.name==='jimen')
             done();
        })
       // done();
    })
})