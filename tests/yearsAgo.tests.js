describe('Testing How Years Ago function', function(){
    it("it should return how many years ago that 2005 is from the current year.", function(){

        assert.equal((new Date().getFullYear() - 2005), yearsAgo(2005));

    });

    it("it should return how many years ago that 1862 is from the current year.", function(){

        assert.equal((new Date().getFullYear() - 1862), yearsAgo(1862));

    });

});
