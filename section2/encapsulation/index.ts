class BankAcount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount < 0) {
      console.warn("Invalid deposit amount");
      return;
    }

    this._balance += amount;
  }

  withdraw(amount: number): void {
    if (amount < 0) {
      console.warn("Invalid withdrawal amount");
      return;
    }

    if (this._balance - amount < 0) {
      console.warn("Insufficient funds");
      return;
    }

    this._balance -= amount;
  }

  getBalance(): number {
    return this._balance;
  }
}
