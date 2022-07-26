describe('Testing my greet function', function(){
    it("it should return 'Hello, Zuri!' when called with 'Zuri'", function(){

        assert.equal("Hello, Zuri!", greet("Zuri"), "this should not be true");
    });
    it("it should return 'Hello, Nakia!' when called with 'Nakia'", function(){

        assert.equal("Hello, Nakia!", greet("Nakia"), "this should not be true");
    });


});