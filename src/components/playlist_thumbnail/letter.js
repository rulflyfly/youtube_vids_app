export default class Letter {
    constructor(letter, posittionX, width) {
      this.letter = letter;
      this.possitionX = posittionX;
      this.width = width;
    }
    
    moveRight(p5, lettersAmount) {
      let gap = this.width;
      let textLength = this.width  * lettersAmount + gap;
      let widthDiff = p5.width - textLength;
      let rigthWall =  p5.width + Math.abs(widthDiff);

      let appearancePoint = -this.width;
      
      if (this.possitionX > rigthWall) {
        this.possitionX = appearancePoint;
      }
      
      this.possitionX+=3;

    }

    moveLeft(p5, lettersAmount) {
        let gap = this.width;
        let textLength = this.width * lettersAmount + gap;
        let leftWall = p5.width - textLength + this.width;

        let appearancePoint = p5.width + this.width;
        
        if (this.possitionX < leftWall) {
          this.possitionX = appearancePoint;
        }
      
      this.possitionX-=3;
    }

    display(p5, height) {
        p5.textSize(this.width);
        p5.text(this.letter, this.possitionX, height);
        p5.fill(255);
    }
  }