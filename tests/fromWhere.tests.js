describe('Testing my From Where function', function(){
    it("it should return 'Bellville' when the registration number starts with 'CY'", function(){

        assert.equal("Bellville", fromWhere("CY"), "this should not be true");
    });
    it("it should return 'Paarl' when the registration number starts with 'CJ'", function(){

        assert.equal("Paarl", fromWhere("CJ"), "this should not be true");
    });
    it("it should return 'Cape Town' when the registration number starts with 'CA'", function(){

        assert.equal("Cape Town", fromWhere("CA"), "this should not be true");
    });
    it("'Some other place!' when the registration number starts with 'anything else'", function(){

        assert.equal("Some other place!", fromWhere("anything else"), "this should not be true");
    });


});