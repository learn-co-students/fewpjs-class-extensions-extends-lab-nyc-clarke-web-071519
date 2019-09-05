// Your code here

class Polygon {
    constructor(sidesArray) {
        this.sides = sidesArray;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((a,memo)=> a + memo)
    }
}

class Triangle extends Polygon {

    get isValid() {
        return (this.sides[0] < this.sides[1] + this.sides[2]) && (this.sides[1] < this.sides[0] + this.sides[2]) && (this.sides[2] < this.sides[0] + this.sides[1])
    }

}

class Square extends Polygon {

    get isValid() {
        return this.sides.every(element => element === this.sides[0])
    }

    get area() {
        return this.sides[0] ** 2
    }

}