const assert=require('assert');
const cat= require('../models/category');

describe('Updating database',()=>{

    newcat=cat({
        category_name:'tech'
    })
    newcat.save()

    it('updating db of category',(done)=>{
        cat.findOneAndUpdate({category_name:'tech'}, {category_name:'technical'}).then((data)=>{
            console.log(data);
            cat.findById({_id:newcat._id}).then((result)=>{
                assert(result.category_name ==='technical')
                done();
            })
        })
        // cat.findByIdAndUpdate
    })
})