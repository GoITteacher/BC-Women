/* 
Написати систему контролю банку.

Властивості:
- список користувачів [userId, FIO,'password']
- список рахунків [userId, accountNumber, value]

Методи:
- додати користувача
- видалити користувача

- створити рахунок
- видалити рахунок

- додати гроші на рахунок
- зняти гроші з рахунка

- переглянути баланс на рахунку
- переглянути сумарний баланс на усіх рахунках

- отримати список користувачів у яких баланс менший за N
- отримати список користувачів у яких баланс більший за N
*/

const bank = {
  users: [],
  account: [],

  addUser(login, password) {},

  deleteUser(id) {},

  createAccount(id) {},

  deleteAccount(id) {},

  deleteAccountForUser(id) {},

  deposit(amount, id) {},

  withdraw(amount, id) {},

  getBalance(id) {},

  getTotalBalance(userId) {},

  getUserWithSmallBalance(min) {},

  getVipUsers(max) {},
};

let randomID = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// =======================

bank.addUser('1', '1');
const accountId = bank.account[0].accountId;
const userId = bank.users[0].userId;

bank.deposit(1000, accountId);
bank.deposit(1000, accountId);
bank.deposit(1000, accountId);
bank.withdraw(700, accountId);
bank.createAccount(userId);

bank.deleteUser(userId);

console.log(bank.users);
console.log(bank.account);
