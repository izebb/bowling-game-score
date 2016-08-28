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

    // 2.
    it("should handle a first strike", function() {

    });

    // 3.
    it("should handle a spare", function() {


    });

    // 3.
    it("should handle a  2 strikes and 1 spare", function() {

    });

    // 4.
    it("should handle all missed ball played", function() {

    });

    // 5.
    it("should handle all spare scores", function() {

    });

    // 6.
    it("should handle last two sparse and remaining strike", function() {

    });

    // 7.
    it("should handle a perfect game", function() {
    
    });

})
