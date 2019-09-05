// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
    let result = 0;
    if(!Array.isArray(this.sides)) {return this.sides};

    for(let side of this.sides) {
    result += side;
    }
    return result;
    }
}

class Triangle extends Polygon {
    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];

        return ((a + b > c) && (a + c > b) && (b + c > a) )
    }
}

class Square extends Polygon {
    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];
        let d = this.sides[3];

        return((a == b) && (a == c) && (a == d))

    }

    get area() {
        let result = 0;
        for(let side of this.sides) {
             result = side * side;
        }
        return result;
    }
}