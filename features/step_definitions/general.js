module.exports = function () {
    
    const
        chai = require('chai'),
        expect = chai.expect;
        chai.use(require('chai-subset'));
        validator = require('validator');

    
    this.Given(/^the system is up and running$/i,  function() {
        return this.server.then(function(server) {
            // checking the 'up' server flag
            expect(server.info.started).to.be.above(0);
            return server;
        });
    });
    
   this.Given(/^a valid (\w+) payload$/, function (model) {
        this.fixture = require('../fixtures/valid-' + model)
    });
    

    this.Then(/^I receive a (\d+) status code$/, function (statusCode) {
        expect(this.response.statusCode.toString()).to.equal(statusCode);
    });
       
    this.When(/^I (\w+) it against the \/(.*) endpoint$/, function (verb, endpoint) {
        var that = this;
        return this.doHttpRequest(endpoint, verb, that.fixture.request)
        .spread(function (response) {
            that.response = response;
            return response;
        })
        .catch(error => {
            that.response = error;
            return error;
            }
        );
    });
    
    this.Then(/^a payload containing the newly created resource$/, function () {
        expect(this.response.body).to.containSubset(this.fixture.request);
    });    
    
    this.Then(/^a payload containing the newly created id/, function () {
        expect(validator.isUUID(this.response.body.data.id))
    }); 
    
    this.Then(/^a message saying that (.*)$/, function (model) {
        
        var error = this.response;
        
        if (model == 'is missing the name') {
            expect( expect(this.response.body).to.containSubset("data.attributes.name") );
        }
        
        if (model == 'has a negative price') {
            expect( expect(this.response.body).to.containSubset("data.attributes.price"));
        }
    });
}
