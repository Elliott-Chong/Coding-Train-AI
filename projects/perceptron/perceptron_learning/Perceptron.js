class Perceptron {
    constructor() {
        this.weights = [0, 0, 0]
        this.learning_rate = 0.05
    }

    activationFunction(val) {
        if (val >= 0) {
            return 1
        }
        else {
            return -1
        }
    }

    guess(inputs) {
        let sum = 0
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i]
        }
        return this.activationFunction(sum)
    }

    train(point) {
        let inputs = [point.y, point.x, 1]
        let guess = this.guess(inputs)

        for (let i = 0; i < inputs.length; i++) {
            this.weights[i] += inputs[i] * (point.label - guess) * this.learning_rate
        }

        if (guess == point.label) {
            point.correct = true
        }
        else {
            point.correct = false
        }
    }

    show() {

        let [w0, w1, w2] = this.weights

        let x1 = -xRange
        let x2 = xRange

        let y1 = (-w1 * x1 - w2) / w0
        let y2 = (-w1 * x2 - w2) / w0

        x1 = map(x1, -xRange, xRange, 0, width)
        x2 = map(x2, -xRange, xRange, 0, width)

        y1 = map(y1, -yRange, yRange, height, 0)
        y2 = map(y2, -yRange, yRange, height, 0)

        line(x1, y1, x2, y2)
    }

}