const assert=require('assert');
const cat= require('../models/category');

describe('deleting entry form database',()=>{

    newcat=cat({
        category_name:'tech'
    })
    newcat.save()

    it('deleting entry from db of category',(done)=>{
        cat.deleteOne({category_name:'tech'}).then((data)=>{
            console.log(data);
            cat.findById({_id:newcat._id}).then((result)=>{
                assert(result ===null)
                done();
            })
        })
        // cat.findByIdAndUpdate
    })
})