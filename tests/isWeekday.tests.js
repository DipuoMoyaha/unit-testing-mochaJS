describe('Testing my Week Day function', function(){
    it("it should return 'Monday' for the day of the week that starts with 'M'", function(){

        assert.equal(isWeekday('Monday'), true);
    });
    it("it should return 'Tuesday','Thursday' of the day of the week  that starts with 'T'", function(){

        assert.equal(isWeekday('Tuesday'), true);
    });
    it("it should return 'Wednesday' of the day of the week that starts with 'W'", function(){

        assert.equal(isWeekday('Wednesday'), true);
    });
    it("it should return 'Friday' of the day of the week that starts with 'F'", function(){

        assert.equal(isWeekday('Friday'), true);
    });


});