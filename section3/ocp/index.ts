// Violates OCP as we can't add a new customer type without modifying the giveDiscount method.
// class Discount {
//   giveDiscount(customerType: "premium" | "regular"): number {
//     if (customerType === "regular") {
//       return 10;
//     } else if (customerType === "premium") {
//       return 20;
//     } else {
//       return 10;
//     }
//   }
// }

// Solution.
interface Customer {
  giveDiscount(): number;
  addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return Math.floor(amountSpent);
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return Math.floor(amountSpent) * 2;
  }
}

class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 30;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return Math.floor(amountSpent) * 3;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

const regularCustomer = new RegularCustomer();
const premiumCustomer = new PremiumCustomer();
const goldCustomer = new GoldCustomer();
const discount = new Discount();

console.log(discount.giveDiscount(regularCustomer)); // 10
console.log(discount.giveDiscount(premiumCustomer)); // 20
console.log(discount.giveDiscount(goldCustomer)); // 30
