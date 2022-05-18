class NeuralNetwork {
    constructor(inputNodes, hiddenNodes, outputNodes) {
        this.inputNodes = inputNodes
        this.hiddenNodes = hiddenNodes
        this.outputNodes = outputNodes

        this.weights_ih = new Matrix(this.hiddenNodes, this.inputNodes)
        this.weights_ho = new Matrix(this.outputNodes, this.hiddenNodes)
        this.weights_ih.randomize()
        this.weights_ho.randomize()

        this.bias_h = new Matrix(this.hiddenNodes, 1)
        this.bias_o = new Matrix(this.outputNodes, 1)
        this.bias_h.randomize()
        this.bias_o.randomize()
    }

    activationFunction(input) {
        return 1 / (1 + Math.exp(-input))
    }

    feedforward(input) {
        input = Matrix.fromArray(input)
        let hiddenOutput = Matrix.multiply(this.weights_ih, input)
        hiddenOutput.add(this.bias_h)
        hiddenOutput.map(this.activationFunction)

        let outputOutput = Matrix.multiply(this.weights_ho, hiddenOutput)
        outputOutput.add(this.bias_o)
        outputOutput.map(this.activationFunction)

        return outputOutput.toArray()
    }

    train(inputs, targets) {
        let guess = this.feedforward(inputs)
        guess = Matrix.fromArray(guess)
        targets = Matrix.fromArray(targets)
        let outputError = Matrix.subtract(targets, guess)

        targets.show()
        guess.show()
        outputError.show()
    }

}