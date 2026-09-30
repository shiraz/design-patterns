abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCard extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

class DebitCard extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing debit card payment of $${amount}`);
  }
}

class PayPal extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

function pay(processor: PaymentProcessor, amount: number): void {
  processor.processPayment(amount);
}

const cc = new CreditCard();
const dc = new DebitCard();
const pp = new PayPal();

pay(cc, 100);
pay(dc, 50);
pay(pp, 75);
