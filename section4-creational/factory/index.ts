abstract class Car {
  constructor(
    public model: string,
    public productionYear: number,
  ) {}

  abstract displayCarInfo(): void;
}

class Sedan extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a Sedan. Model: ${this.model}, and the year is ${this.productionYear}`,
    );
  }
}

class SUV extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a SUV. Model: ${this.model}, and the year is ${this.productionYear}`,
    );
  }
}

class CarFactory {
  public createCar(
    type: 'sedan' | 'suv',
    model: string,
    productionYear: number,
  ): Car {
    switch (type) {
      case 'sedan':
        return new Sedan(model, productionYear);
      case 'suv':
        return new SUV(model, productionYear);
      default:
        throw new Error('Invalid car type');
    }
  }
}

const carFactory = new CarFactory();
const sedan = carFactory.createCar('sedan', 'camry', 2023);
sedan.displayCarInfo();

const rogue = carFactory.createCar('suv', 'rogue', 2021);
rogue.displayCarInfo();
