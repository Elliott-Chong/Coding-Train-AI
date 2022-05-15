const randomVal = (min, max) => {
    const range = max - min
    return (Math.random() * range) + min
}
let stop = false

let xRange = 50
let yRange = 50

let points = []
let brain = new Perceptron()

function setup() {
    createCanvas(800, 800)
    for (let i = 0; i < 500; i++) {
        let newPoint = new Point()
        points.push(newPoint)
    }
    // frameRate(10)
}

function draw() {
    background(255)
    stroke(255, 0, 0)
    textSize(32)
    text('0', 10, height / 2 - 10)
    line(width / 2, 0, width / 2, height)
    line(0, height / 2, width, height / 2)
    for (let point of points) {
        point.show()
    }
    for (let point of points) {
        brain.train(point)
    }
    brain.show()
    for (let point of points) {
        if (!point.correct) return
    }
    if (stop) {
        let [w0, w1, w2] = brain.weights
        console.log(`the perceptron thinks your input equation is y = ${(-w1 / w0).toPrecision(3)}x + ${(-w2 / w0).toPrecision(3)}`)
        createP(`y = ${(-w1 / w0).toPrecision(3)}x + ${(-w2 / w0).toPrecision(3)}`)
        noLoop()
    }
    stop = true
}
