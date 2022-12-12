/* 
Напиши скрипт управления личным кабинетом интернет банка. 
Есть объект account в котором необходимо реализовать методы для работы с 
балансом и историей транзакций.
*/

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      //id: generateID(),
      type,
      amount,
    };
    this.transactions.push(transaction);
  },

  deposit(amount) {
    if (amount < 0) return;
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
  },

  withdraw(amount) {
    if (amount > this.balance || amount < 0) return;
    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const trans of this.transactions) {
      if (trans.id === id) return trans;
    }
  },

  getTransactionTotal(type) {
    const result = [];

    for (const trans of this.transactions) {
      if (trans.type === type) {
        result.push(trans);
      }
    }

    return result;
  },
};
// ====================================
account.deposit(5000); // +
account.deposit(2000); // +
account.deposit(-2000); // -
account.withdraw(4000); // +
account.withdraw(1000); // +
account.withdraw(1000); // +
account.withdraw(-4000); // -
account.withdraw(10000); // -

function generateID() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
