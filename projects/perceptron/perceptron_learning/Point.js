class Point {
    constructor(x = null, y = null) {

        this.f = (x) => {
            let m = -4
            let c = 8.2
            return m * x + c
        }

        if (!x && !y) {
            this.x = randomVal(-xRange, xRange)
            this.y = randomVal(-yRange, yRange)
        }
        else {
            this.x = x
            this.y = y
        }
        let val = this.f(this.x)
        if (val > this.y) {
            this.label = 1
        }
        else {
            this.label = -1
        }
        this.correct = -1
    }

    show() {
        stroke(0)
        strokeWeight(4)
        let px = map(this.x, -xRange, xRange, 0, width)
        let py = map(this.y, -yRange, yRange, height, 0)
        if (this.correct && this.correct != -1) {
            fill(0, 255, 0)
        }
        else if (!this.correct && this.correct != -1) {
            fill(255, 0, 0)
        }
        else {
            noFill()
        }
        if (this.label == 1) {
            ellipse(px, py, 20)
        }
        else {
            rect(px, py, 20, 20)
        }
    }
}