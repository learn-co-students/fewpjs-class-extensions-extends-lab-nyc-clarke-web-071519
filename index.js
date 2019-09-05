// Your code here
class Polygon{
    constructor(integers) {
        this.integers = integers;
    }

    get countSides(){
       return this.integers.length
    }

    get perimeter(){
       let sum = 0
        this.integers.forEach(num => {
            sum += num
        })
        return sum
    }
}

class Triangle extends Polygon {

    get isValid(){
            let side1 = this.integers[0]
            let side2 = this.integers[1]
            let side3 = this.integers[2]

            if ((side1 + side2) > side3 && (side1 + side3) > side2 && (side2 + side3) > side1){
                return true
            } else {
                return false 
            }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.integers[0] === this.integers[1] && this.integers[0] === this.integers[2] && this.integers[0] === this.integers[3] ){
            return true
        } else {
            return false
        }
    }

    get area(){
        return this.integers[0] * this.integers[0]
    }

}