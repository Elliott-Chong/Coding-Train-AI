class Point {
  static m = 1;
  static c = 0;
  constructor(x = null, y = null, number) {
    this.number = number;
    this.f = (x) => {
      return Point.m * x + Point.c;
    };

    if (!x && !y) {
      this.x = randomVal(-xRange, xRange);
      this.y = randomVal(-yRange, yRange);
    } else {
      this.x = x;
      this.y = y;
    }
    // let val = this.f(this.x);
    // if (val > this.y) {
    //   this.label = 1;
    // } else {
    //   this.label = -1;
    // }
    this.label = label;
    this.correct = false;
  }

  static showRealLine() {
    let x1 = -xRange;
    let x2 = xRange;
    let y1 = Point.m * x1 + Point.c;
    let y2 = Point.m * x2 + Point.c;

    x1 = map(x1, -xRange, xRange, 0, width);
    x2 = map(x2, -xRange, xRange, 0, width);

    y1 = map(y1, -yRange, yRange, height, 0);
    y2 = map(y2, -yRange, yRange, height, 0);

    line(x1, y1, x2, y2);
  }

  static updateCorrectness() {
    for (let point of points) {
      let inputs = [point.y, point.x, 1];
      let guess = brain.guess(inputs);

      if (guess == point.label) {
        point.correct = true;
      } else {
        point.correct = false;
      }
    }
  }

  show() {
    let px = map(this.x, -xRange, xRange, 0, width);
    let py = map(this.y, -yRange, yRange, height, 0);
    if (this.correct) {
      fill(0, 255, 0);
    } else if (!this.correct) {
      fill(255, 0, 0);
    }
    if (this.label == 1) {
      ellipse(px, py, 20);
    } else {
      rect(px, py, 20, 20);
    }
    text(this.number, px, py);
  }
}
