export class Bank {
  balance = 0;
  historyTransaction = [];
  constructor() {}

  deposit(value) {
    this.balance += +value;

    const transaction = {
      type: 'deposit',
      value: value,
      balance: this.balance,
    };

    this.historyTransaction.push(transaction);
  }
  withdraw(value) {
    this.balance -= +value;

    const transaction = {
      type: 'withdraw',
      value: value,
      balance: this.balance,
    };

    this.historyTransaction.push(transaction);
  }

  setData({ balance = 0, historyTransaction = [] } = {}) {
    this.balance = balance;
    this.historyTransaction = historyTransaction;
  }
}
