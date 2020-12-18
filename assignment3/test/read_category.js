const assert =require('assert');
const category = require('../models/category');
// const product = require('../models/category');
describe('reading data',()=>{
    let newcat=category({
        category_name:'macine'
    })
    newcat.save()
    
    it('it finds one record form db of categoty',(done)=>{
        category.findOne({category_name:'macine'}).then((data)=>{
            console.log(data);
            assert(data.category_name==='macine')
            done();
        })
       // done();
    })
})