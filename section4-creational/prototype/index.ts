interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  private user: UserDetails;

  constructor(user: UserDetails) {
    this.user = user;
  }

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}

const user1 = new ConcretePrototype({
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
});

const user2 = user1.clone();

console.log(user1.getUserDetails());
console.log(user2.getUserDetails());