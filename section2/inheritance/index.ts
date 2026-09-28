class Product {
  private id: string;
  public price: number;
  public description: string;

  constructor(id: string, price: number, description: string) {
    this.id = id;
    this.price = price;
    this.description = description;
  }

  display(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Price: ${this.price}`);
    console.log(`Description: ${this.description}`);
  }
}

class Book extends Product {
  private author: string;
  private title: string;

  constructor(
    id: string,
    price: number,
    description: string,
    author: string,
    title: string,
  ) {
    super(id, price, description);
    this.author = author;
    this.title = title;
  }

  display(): void {
    super.display();
    console.log(`Author: ${this.author}`);
    console.log(`Title: ${this.title}`);
  }
}

class Electronic extends Product {
  private brand: string;
  private model: string;

  constructor(
    id: string,
    price: number,
    description: string,
    brand: string,
    model: string,
  ) {
    super(id, price, description);
    this.brand = brand;
    this.model = model;
  }

  display(): void {
    super.display();
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
  }
}

const book = new Book("1", 29.99, "A great book", "John Doe", "TypeScript Basics");
const electronic = new Electronic("2", 499.99, "A powerful laptop", "BrandX", "ModelY");

book.display();
electronic.display();