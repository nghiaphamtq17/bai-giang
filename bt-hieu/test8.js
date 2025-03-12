class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(size){
        super(size, size);
    }
}

const square1  = new Square(5);
console.log(square1.getArea());
