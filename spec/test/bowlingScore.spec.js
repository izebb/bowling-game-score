import Bowling from "../../src/bowling"

describe('Bowling game', () => {
  let bowling;
    beforeEach(function(){
  		bowling = new Bowling();
  	});

    // 1.
    it("should have 10 frames ", function() {
          expect(bowling.getFrame().length).toBe(10);
    });

    

})
