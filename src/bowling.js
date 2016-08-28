/**

**/
class Bowling {
    constructor() {
        this.frames = new Array(10); // total number of frame
        this.frameNum = this.frames.length;
        this.maxRoll = 10;
        for (let i = 0; i < this.frameNum; i++) {
            this.frames[i] = [];
        }
        this.currentFrame = 0;
        this.currentRoll = 0;
    }
    getFrame() {

        return this.frames;
    }

}


export default Bowling;
