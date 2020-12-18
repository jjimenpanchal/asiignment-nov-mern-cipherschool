const assert=require('assert');
const product = require('../models/product');

describe('Updating database',()=>{

    newproduct=product({
        product_name:'mobile',
        price:21342466,
        category:'device',
        quantity:789
    })
    newproduct.save()

    it('updating db of productegory',(done)=>{
        product.findOneAndUpdate({product_name:'mobile'}, {product_name:'phone'}).then((data)=>{
            console.log(data);
            product.findById({_id:newproduct._id}).then((result)=>{
                assert(result.product_name==='phone')
                done();
            })
        })
        // product.findByIdAndUpdate
    })
})