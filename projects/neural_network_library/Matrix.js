class Matrix {
    constructor(rows, cols) {
        this.rows = rows
        this.cols = cols
        this.data = []
        for (let i = 0; i < this.rows; i++) {
            this.data[i] = []
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 0
            }
        }
    }

    show() {
        console.table(this.data)
    }

    randomize() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = Math.floor(Math.random() * 2 - 1)
            }
        }
    }

    static fromArray(arr) {
        let resultingMatrix = new Matrix(arr.length, 1)
        for (let i = 0; i < resultingMatrix.rows; i++) {
            resultingMatrix.data[i] = []
            for (let j = 0; j < resultingMatrix.cols; j++) {
                resultingMatrix.data[i][j] = arr[i]
            }
        }
        return resultingMatrix
    }

    toArray() {
        let res = []
        this.map(elt => res.push(elt))
        return res
    }

    static subtract(a, b) {
        if (a.rows != b.rows || a.cols != b.cols) {
            console.log('Error subtract operation')
            return -1
        }
        let resultingMatrix = new Matrix(a.rows, a.cols)
        for (let i = 0; i < resultingMatrix.rows; i++) {
            for (let j = 0; j < resultingMatrix.cols; j++) {
                resultingMatrix.data[i][j] = a.data[i][j] - b.data[i][j]
            }
        }
        return resultingMatrix
    }

    add(m) {
        if (m instanceof Matrix) {
            if (m.rows != this.rows || m.cols != this.cols) {
                console.log('Invalid Add Operation, matrices do not have the same dimensions.')
                return -1
            }
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += m.data[i][j]
                }
            }
        } else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += m
                }
            }
        }
    }

    map(cb) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = cb(this.data[i][j])
            }
        }
    }

    transpose() {
        let resultingMatrix = new Matrix(this.cols, this.rows)
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                resultingMatrix.data[j][i] = this.data[i][j]
            }
        }
        return resultingMatrix
    }

    static multiply(n, m) {
        if (!n instanceof Matrix || !m instanceof Matrix) {
            console.log("One or both of the inputs are not matrices")
            return -1
        }

        if (n.cols != m.rows) {
            console.log("Invalid Multiplication Operation, matrices are not comformable.")
            return -1
        }

        let resultingMatrix = new Matrix(n.rows, m.cols)

        for (let i = 0; i < resultingMatrix.rows; i++) {
            for (let j = 0; j < resultingMatrix.cols; j++) {
                for (let k = 0; k < n.cols; k++) {
                    resultingMatrix.data[i][j] += n.data[i][k] * m.data[k][j]
                }
            }
        }

        return resultingMatrix



    }
}