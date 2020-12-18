const assert=require('assert');
const product = require('../models/product');

describe('deleting entry from database',()=>{

    newproduct=product({
        product_name:'mobile',
        price:21342466,
        category:'device',
        quantity:789
    })
    newproduct.save()

    it('deleting entry from db of product',(done)=>{
        product.deleteOne({product_name:'mobile'}).then((data)=>{
            console.log(data);
            product.findById({_id:newproduct._id}).then((result)=>{
                assert(result===null)
                done();
            })
        })
        // product.findByIdAndUpdate
    })
})