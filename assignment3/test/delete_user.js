const assert=require('assert');
const user= require('./../models/user');

describe('deleting enty',()=>{

    newuser=user({
        name:'jimenji',
        password:'1234',
        email:'jjimen@gmail.com',
        country:'india'
    })
    newuser.save()

    it('deleting entry from db of user',(done)=>{
        // user.deleteOne({})
        user.deleteOne({name:'jimenji'}).then((data)=>{
            console.log(data);
            user.findById({_id:newuser._id}).then((result)=>{
                assert(result===null)
                done();
            })
        })

    })
})