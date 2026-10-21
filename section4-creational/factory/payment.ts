abstract class PaymentProcessor {
  constructor(public amount: number) {}

  abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Processed payment of amount, $${this.amount} via Paypal.`);
  }
}

class StripeProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Processed payment of amount, $${this.amount} via Stripe.`);
  }
}

class BankTransferProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(
      `Processed payment of amount, $${this.amount} via bank transfer.`,
    );
  }
}

class PaymentProcessorFactory {
  public createProcessor(
    type: 'paypal' | 'stripe' | 'bank',
    amount: number,
  ): PaymentProcessor {
    switch (type) {
      case 'bank':
        return new BankTransferProcessor(amount);
      case 'paypal':
        return new PaypalProcessor(amount);
      case 'stripe':
        return new StripeProcessor(amount);
    }
  }
}

const ppf = new PaymentProcessorFactory();
const pp = ppf.createProcessor('paypal', 112);
pp.processPayment();
