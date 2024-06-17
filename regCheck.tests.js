describe ("Testing the regCheck function", function(){
    it ("it should return true,when it called with GP", function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    
    });
       it ("it should return false,when it called with EC", function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    
       });
       it ("it should return true, when it called with L", function(){
        assert.equal(regCheck('5566 L', 'L'), true);
       });

       it ("it should return false, when it called with M", function(){
        assert.equal(regCheck('5566 L', 'M'), false);
       });

       it ("it should return true, when it called with EC", function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
       });

       it ("it should return false, when it called with GP", function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
       });

      });