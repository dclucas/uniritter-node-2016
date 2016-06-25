module.exports = function () {
    
    const
        chai = require('chai');
        expect = chai.expect;
        chai.use(require('chai-subset'));
            

    this.Given(/^an invalid product that (.*)$/i, function(model) {

        if (model == 'is missing the name') {
            this.fixture = require('../fixtures/product-no-name')    
        }
        
        if (model == 'has a negative price') {
            this.fixture = require('../fixtures/product-negative-price')   
        }
        
    });
   
};
