/* 
Написати систему контролю банку.

Властивості:
- список користувачів [userId, login, password]
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
  accounts: [],

  addUser(login, password) {
    const user = {
      userId: randomID(),
      login,
      password,
    };
    this.users.push(user);
    this.createAccount(user.userId);
  },

  deleteUser(id) {},

  createAccount(id) {
    const userAccount = {
      userID: id,
      accountNumber: randomID(),
      value: 0,
    };
    this.accounts.push(userAccount);
  },

  deleteAccount(id) {},

  deleteAccountForUser(id) {},

  deposit(amount, id) {
    if (amount < 0) return;
    for (const account of this.accounts) {
      if (account.accountNumber === id) {
        account.value += amount;
      }
    }
  },

  withdraw(amount, id) {},

  getBalance(id) {},

  getTotalBalance(userId) {
    let total = 0;
    for (const account of this.accounts) {
      if (account.userID === userId) {
        total += account.value;
      }
    }

    return total;
  },

  getUserWithSmallBalance(min) {},

  getVipUsers1() {
    let max = 0;
    let vipUser;
    for (const user of this.users) {
      const total = this.getTotalBalance(user.userId);
      if (total > max) {
        max = total;
        vipUser = user;
      }
    }
    return vipUser;
  },

  getVipUsers2(max) {
    const filteredUsers = [];

    for (const user of this.users) {
      if (this.getTotalBalance(user.userId) > max) {
        filteredUsers.push(user);
      }
    }

    return filteredUsers;
  },

  getVipUsers() {
    const COUNT_USERS = 3;

    let max = 0;
    for (const user of this.users) {
      const total = this.getTotalBalance(user);
      if (total > max) {
        max = total;
      }
    }

    let max1 = 0;
    for (const user of this.users) {
      const total = this.getTotalBalance(user);
      if (total > max1 && total < max) {
        max1 = total;
      }
    }

    let max2 = 0;
    for (const user of this.users) {
      const total = this.getTotalBalance(user);
      if (total > max2 && total < max1) {
        max2 = total;
      }
    }

    const filteredArray = [];

    for (const user of this.users) {
      const total = this.getTotalBalance(user);
      if (total > max2) filteredArray.push(user);
    }

    return filteredArray;
  },
};

let randomID = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// =======================

bank.addUser('1', '1');
const accountId = bank.accounts[0].accountNumber;
const userId = bank.users[0].userId;

bank.deposit(5000, accountId);
bank.deposit(2000, accountId);
bank.deposit(1000, accountId);
// bank.withdraw(700, accountId);
// bank.createAccount(userId);

// bank.deleteUser(userId);

console.log(bank.users);
console.log(bank.accounts);
