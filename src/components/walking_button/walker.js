export default class Walker {
    constructor(p5) {
        this.velocity = p5.createVector(0, 0);
        this.acc = p5.createVector(0, 0);
        this.location = p5.createVector(p5.width / 2, p5.height / 2);
        this.width = 150;
        this.offSetX = 0;
        this.offSetY = 10000;
        this.r = this.width / 2;
    }

    checkEdges(p5) {
        if (this.location.x < this.r) {
            this.location.x = this.r;
            this.velocity.x *= -1;
        } else if (this.location.x > p5.width - this.r) {
            this.location.x = p5.width - this.r;
            this.velocity.x *= -1;
        }

        if (this.location.y < this.r) {
            this.location.y = this.r;
            this.velocity.y *= -1;
        } else if (this.location.y > p5.height - this.r) {
            this.location.y = p5.height - this.r;
            this.velocity.y *= -1;
        }
    }

    walk(p5) {
        this.acc.x = p5.noise(this.offSetX) * p5.random(-1, 1);
        this.acc.y = p5.noise(this.offSetY) * p5.random(-1, 1);;

        this.velocity.add(this.acc);
        this.velocity.limit(5);
        this.location.add(this.velocity);

        this.offSetX += 0.1;
        this.offSetY += 0.1;
    }

    display(p5) {
        let addjustX = this.width / 8;
        let addjustY = this.width / 3;;

        if (this.isMouseIn(p5)) p5.fill(106, 161, 33);
        else p5.fill(255);
        p5.circle(this.location.x, this.location.y, this.width);
        p5.fill(0);
        p5.textSize(this.r)
        p5.text('OK', this.location.x - this.r + addjustX, this.location.y + this.r - addjustY);
    }

    isMouseIn(p5) {
        // sqrD = square distance
        const sqrD = Math.pow((this.location.x - p5.mouseX), 2) + Math.pow((this.location.y-p5.mouseY), 2);
        if (sqrD <= Math.pow(this.r, 2)) {
          return true;
        } else {
          return false;
        }
      }
}