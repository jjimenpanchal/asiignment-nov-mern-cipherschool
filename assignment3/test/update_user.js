const assert=require('assert');
const user= require('./../models/user');

describe('Updating database',()=>{

    newuser=user({
        name:'jimenji',
        password:'1234',
        email:'jjimen@gmail.com',
        country:'india'
    })
    newuser.save()

    it('updating db of user',(done)=>{
        user.findOneAndUpdate({name:'jimenji'}, {name :'jack'}).then((data)=>{
            console.log(data);
            user.findById({_id:newuser._id}).then((result)=>{
                assert(result.name==='jack')
                done();
            })
        })

    })
})