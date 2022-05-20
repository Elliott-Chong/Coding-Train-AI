const dataSet = [
    { inputs: [1, 0], outputs: [1, 3, 3] },
    { inputs: [0, 1], outputs: [1, 3, 3] },
    { inputs: [1, 1], outputs: [0, 3, 3] },
    { inputs: [0, 0], outputs: [0, 3, 3] },
]

function setup() {
    var nn = new NeuralNetwork(2, 2, 3)
    for (let i = 0; i < 1; i++) {
        let data = random(dataSet)
        nn.train(data.inputs, data.outputs)
    }

    console.log(nn.feedforward([1, 0]))
    console.log(nn.feedforward([0, 1]))
    console.log(nn.feedforward([1, 1]))
    console.log(nn.feedforward([0, 0]))
}

function draw() {

}