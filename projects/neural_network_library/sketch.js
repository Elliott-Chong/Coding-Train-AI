function setup() {
    let n = new Matrix(2, 3)
    let m = new Matrix(3, 3)

    n.randomize()
    m.randomize()
    n.show()
    n.map(elt => elt + 2)
    n.show()

}

function draw() {

}