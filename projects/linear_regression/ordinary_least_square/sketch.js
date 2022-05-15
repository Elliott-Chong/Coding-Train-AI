let points = new Array()
let gradient = 1
let yint = 0

function setup() {
    createCanvas(700, 700);
}


function mousePressed() {
    if (mouseX < 0 || mouseX >= width || mouseY < 0 || mouseY >= height) return
    let x = map(mouseX, 0, width, 0, 1)
    let y = map(mouseY, 0, height, 1, 0)
    points.push(createVector(x, y))
}

const linearRegression = () => {
    let xSum = 0
    let ySum = 0

    for (let i = 0; i < points.length; i++) {
        xSum += points[i].x
        ySum += points[i].y
    }


    let xAvg = xSum / points.length
    let yAvg = ySum / points.length

    let num = 0
    let den = 0

    for (let i = 0; i < points.length; i++) {
        num += (points[i].x - xAvg) * (points[i].y - yAvg)
        den += (points[i].x - xAvg) * (points[i].x - xAvg)
    }


    gradient = num / den

    yint = yAvg - (gradient * (xAvg))
}

function draw() {
    background(255)
    strokeWeight(10)
    stroke(0)
    if (points.length == 0) return
    linearRegression()
    for (let i = 0; i < points.length; i++) {
        let x = map(points[i].x, 0, 1, 0, width)
        let y = map(points[i].y, 0, 1, height, 0)
        point(x, y)
    }
    let x1 = 0
    let y1 = gradient * x1 + yint

    let x2 = 1
    let y2 = gradient * x2 + yint
    x1 = map(x1, 0, 1, 0, width)
    x2 = map(x2, 0, 1, 0, width)
    y1 = map(y1, 0, 1, height, 0)
    y2 = map(y2, 0, 1, height, 0)
    strokeWeight(2)
    stroke(255, 0, 0)
    line(x1, y1, x2, y2)

}