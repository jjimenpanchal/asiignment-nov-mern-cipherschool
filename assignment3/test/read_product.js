const assert =require('assert');
const product = require('../models/product');
describe('reading data',()=>{
    let newpro=product({
        product_name:'mouse',
        price:700,
        category:'computer',
        quantity:212
    })
    newpro.save()
    
    it('it finds one record form db of product',(done)=>{
        product.findOne({product_name:'mouse'}).then((data)=>{
            console.log(data);
            assert(data.product_name==='mouse')
             done();
        })
       // done();
    })
})