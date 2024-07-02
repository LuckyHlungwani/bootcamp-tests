describe ("Testing the greet function", function(){
    it ("it should return hello,Lucky when it called with Lucky", function(){
      
      assert.equal(greet('Lucky'), 'Hello, Lucky'), 'this should return Lucky'
    
    });
       it ("it should return hello, Loudrick when it called with Loudrick", function(){
         assert.equal(greet('Loudrick'), 'Hello, Loudrick'); 'this should return Loudrick'
    
       });
      });