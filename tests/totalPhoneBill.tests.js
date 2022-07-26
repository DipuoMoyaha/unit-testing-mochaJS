describe('Testing my Total Phone Bill function', function(){
    it("it should return the bill balance for the 2 calls and 3 sms's made", function(){

        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it("it should return bill balance when 10 calls are made", function(){

        assert.equal('R27.50', totalPhoneBill('call, call, call, call, call, call, call, call, call, call'));
    });
    it("it should return the bill balance for when 7 sms's were made", function(){

        assert.equal('R4.55', totalPhoneBill('sms, sms, sms, sms, sms, sms, sms'));
    });
    


});