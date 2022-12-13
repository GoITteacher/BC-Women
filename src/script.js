// ====================

/* Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
независимых аргументов. */

function calcBMI({ weight, height }) {
  // let { weight, height } = obj;
  weight = Number(weight.replace(',', '.'));
  height = Number(height.replace(',', '.'));
  return +(weight / height ** 2).toFixed(2);
}

// console.log(calcBMI('88,3', '1.75'));

const obj = {
  weight: '88.3',
  height: '1,75',
};

// console.log(calcBMI(obj));

// =======================

/* Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
независимых аргументов. */

/* const params = {
  paramsNames: 'Jacob,William,Solomon,Artemis',
  paramsPhones: '89001234567,89001112233,890055566377,890055566300',
};

function printContactsInfo(names, phones) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i], phones[i]);
  }
}

printContactsInfo([],[]);
printContactsInfo({}); */

// =======================================

/* Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
независимых аргументов.
 */

/* function getBotReport1(companyName, repairBots, defenceBots) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}
function getBotReport2(companyName, repairBots, defenceBots) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

const obj = {
  companyName: 'TEsla',
  repairBots: 123,
  defenceBots: 345,
};
console.log(getBotReport1(obj));
console.log(getBotReport2());
 */

// ===========================

/* function getStockReport({ companyName, stock }) {
  const values = Object.values(stock);
  console.log(values);
  let sum = 0;
  for (let value of values) {
    sum += value;
  }
  return `${companyName} has ${sum} item in stock`;
}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      shoes: 20,
      hats: 26,
    },
  }),
); */
//'Cyberdyne Systems has 200 items in stock';

// =============================

/* 
Дополни функцию `createContact(partialContact)` так, чтобы она возвращала новый
объект контакта с добавленными свойствами `id` и `createdAt`, а также `list` со
значением "default" если в `partialContact` нет такого свойства.

1. create a function 
2. create a resul object
3. add props to object
4. add list if prtialsContact doesn't have a property default
*/
/* 


console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  }),
);
console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  }),
);
console.log(
  createContact({
    age: 'Poly',
    stock: 'poly@hotmail.com',
  }),
); */

// =============================

/* Напиши функцию `transformUsername(user)` так, чтобы она возвращала новый обьект
со свойством `fullName`, вместо `firstName` и `lastName`. */

const user = {
  firstname: 'Петрик',
  lastname: 'Пяточкин',
  login: 123,
  password: 'sefse',
};

function transformUsername(user) {
  const { firstname, lastname, ...args } = user;
  const newUser = {
    fullName: `${firstname} ${lastname}`,
    ...args,
  };

  console.log(newUser);
}
transformUsername(user);
// =======================

// Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]]

// const user = {
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
//   key: '123',
// };

// function foo(obj) {
//   let array = [];
//   for (const key of Object.keys(obj)) {
//     array.push([key, obj[key]]);
//   }
//   console.log(array);
// }

// foo(user);

// console.log(doubleArray(user));
// ==================================

/* 
Напишите функцию, которая возвращает новый объект из указанных значений.
*/

// createObj('234', [], {}, true, 2, 4, 2, 5, 1, 43, 5, 1);

// ===============================

// createObj(['prop1', 'prop2', 'prop3', 'prop4', 'prop5', 'prop6'], [], {});

// =================

// Напишите функцию, которая делает поверхностную проверку объекта на пустоту.

// const obj = {
//   age: 123,
//   name: {}, //null, '', []
// };

// =================================

/* 
    Напишите функцию, которая поверхностно сравнивает два объекта.
*/

// =============================

/* 
Напишите функцию, которая вызывает метод массива на заданный путь объекта.
*/

/* 


const obj = {
  FIO: {
    firstname: 1,
    lastname: 1,
    patronymic: 1,
  },
  addres: {
    street: {
      name: 123,
      house: 123,
    },
    country: {
      name: 123,
      city: 234,
    },
  },
};
getProps('addres,street,house', obj); */

// =======================

/* 
Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
*/
