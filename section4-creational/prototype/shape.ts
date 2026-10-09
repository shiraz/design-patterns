interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}

  abstract clone(): Shape;
}

class Circle extends Shape {
  constructor(
    public radius: number,
    properties: ShapeProperties,
  ) {
    super(properties);
  }

  clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Circle(this.radius, clonedProperties);
  }
}

class Rectangle extends Shape {
  constructor(
    public height: number,
    public width: number,
    properties: ShapeProperties,
  ) {
    super(properties);
  }

  clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Rectangle(this.height, this.width, clonedProperties);
  }
}

const redRectangle: Shape = new Rectangle(10, 20, {
  color: "red",
  x: 20,
  y: 100,
});

const anotherRect: Shape = redRectangle.clone();
anotherRect.properties.color = "blue";

console.log(redRectangle);
console.log(anotherRect);
