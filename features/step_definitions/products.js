module.exports = function () {
    const 
        chai = require('chai'),
        expect = chai.expect;
    chai.use(require('chai-subset'));

    this.Given(/^a valid product$/, function () {
        this.payload ={
            data: {
                type: 'products',
                attributes: {
                    name: "nome do produto",
                    price: 10
                }
            }
        }
    });
        
    this.When(/^I submit it to the API$/, function () {
       const 
           that = this;
        return this.doHttpRequest('products', 'post', this.payload)
        .then((response) => {
            that.response = response;
            return response;
        })
    });
    
    this.Then(/^I receive a success message$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
};
