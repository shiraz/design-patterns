abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number,
  ) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}

// Client code.
function area(shape: Shape): number {
  return shape.calculateArea();
}

const r = new Rectangle(5, 10);
const s = new Square(5);

console.log(area(r)); //50
console.log(area(s)); //25
