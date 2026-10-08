class Singleton {
  private static instance: Singleton;
  private static _value: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {
    console.log("Executing some business logic.");
  }

  set value(val: number) {
    Singleton._value = val;
  }

  get value(): number {
    return Singleton._value;
  }
}


let i1 = Singleton.getInstance();
console.log(i1.value);
i1.value = 42;
console.log(i1.value);

let i2 = Singleton.getInstance();
console.log(i2 === i1);
