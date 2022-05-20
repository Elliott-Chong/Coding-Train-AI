const randomVal = (min, max) => {
  const range = max - min;
  return Math.random() * range + min;
};
let stop = false;
let training = false;
let number = 0;

let label = 1;

let xRange = 50;
let yRange = 50;

let points = [];
let brain = new Perceptron();

function setup() {
  createCanvas(window.innerHeight * 0.8, window.innerHeight * 0.8);
  let change = createButton("switch label");
  change.elt.onclick = () => {
    label = label == 1 ? -1 : 1;
  };
  let trainBtn = createButton("Train");
  trainBtn.elt.onclick = () => {
    training = true;
  };
  for (let i = 0; i < 300; i++) {
    let x = randomVal(-xRange, xRange)
    let y = randomVal(-yRange, yRange)

    const m = 1
    const c = 0
    let what = m * x + c
    if (y > what) {
      label = 1
    }
    else {
      label = -1
    }
    points.push(new Point(x, y))
  }
  frameRate(20)
}

function mousePressed() {
  let x = map(mouseX, 0, width, -xRange, xRange);
  let y = map(mouseY, 0, height, yRange, -yRange);
  if (x >= -xRange && x <= xRange && y >= -yRange && y <= yRange) {
    points.push(new Point(x, y, number));
    number++;
  }
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(4);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);

  brain.show();
  for (let point of points) {
    point.show();
  }
  // if (training) {
  //   for (let point of points) {
  //     brain.train(point);
  //   }
  // }
  if (training) {
    // for (let i = 0; i < 10000; i++) {
    for (let point of points) {
      brain.train(point);
    }
    // }
    Point.updateCorrectness();
  }

  if (training) {
    for (let point of points) {
      if (!point.correct) return;
    }
    if (stop) {
      let [w0, w1, w2] = brain.weights;
      console.log(
        `the perceptron thinks your input equation is y = ${(
          -w1 / w0
        ).toPrecision(3)}x + ${(-w2 / w0).toPrecision(3)}`
      );
      createP(
        `y = ${(-w1 / w0).toPrecision(3)}x + ${(-w2 / w0).toPrecision(3)}`
      );
      noLoop();
    }
    stop = true;
  }
}
