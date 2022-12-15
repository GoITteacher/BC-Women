const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// ======================================================
// Пусть функция `getModels` возвращает массив моделей (поле model) всех автомобилей.

// ======================================================

/* 
Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.
*/

// console.log(cars);
// console.log(makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.4));

// ======================================================

/* 
Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.
*/

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
// console.table(filterByPrice(cars, 23000));

// ======================================================

/* 
Пусть функция `getCarsWithDiscount` возвращает массив автомобилей свойство
onSale которых true.
*/

// console.log(getCarsWithDiscount(cars));

// ======================================================

/* Пусть функция `getCarsWithType` возвращает массив автомобилей тип которых
совпадает со значением параметра `type`. */

// console.log(getCarsWithType(cars, 'suv'));
// console.log(getCarsWithType(cars, 'sedan'));

// ======================================================
//getCarByModel

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// ======================================================

/* Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
отсортированный по возврастанию значения свойства `amount`. */

// console.table(sortByAscendingAmount(cars));

// ======================================================

/*
Пусть функция `sortByDescendingPrice` возвращает новый массив автомобилей
отсортированный по убыванию значения свойства `price`.
*/

// console.table(sortByDescendingPrice(cars));

// ======================================================

/* Пусть функция `sortByModel` возвращает новый массив автомобилей отсортированный
по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от
значения параметра `order`. */

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// ======================================================
/* Пусть функция `getTotalAmount` возвращает общее количество автомобилей(значение
свойств `amount`). */

const getTotalAmount = cars => {
  let totalAmount = 0;

  cars
    .filter(car => car.onSale)
    .filter((value, index) => index % 2 === 0)
    .forEach(car => {
      totalAmount += car.amount;
    });

  return totalAmount;
};

// console.log(getTotalAmount(cars));

// ======================================================

/* Пусть функция `getAvailableCarNames` возвращает массив моделей автомобилей, но
только тех, которые сейчас на распродаже. */

const getAvailableCarNames = cars => {
  return cars
    .filter(car => car.onSale)
    .map(car => car.model)
    .sort((a, b) => a.localeCompare(b));
};

// console.table(getAvailableCarNames(cars));

// =====================================================
/* 
Пусть функция `getSortedCarsOnSale` возвращает массив автомобилей на распродаже
(свойство onSale), отсортированных по возрастанию цены. */

let counter = 0;

const getSortedCarsOnSale = cars => {
  return [...cars]
    .sort((a, b) => {
      console.log(counter++);
      return a.price - b.price;
    })
    .filter(car => car.onSale);
};

const getSortedCarsOnSale1 = cars => {
  return cars
    .filter(car => car.onSale)
    .sort((a, b) => {
      console.log(counter++);
      return a.price - b.price;
    });
};

// console.table(getSortedCarsOnSale1(cars));

// 10 => 111
// 10 => 14

// ======================================================

// https://www.codewars.com/kata/5983cba828b2f1fd55000114
const oddOne = arr => arr.findIndex(el => el % 2 !== 0);

// ======================================================
// https://www.codewars.com/kata/59df2f8f08c6cec835000012
s =
  'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';

function meeting(s) {
  const users = s
    .split(';')
    .map(user => {
      const [firstname, lastname] = user.split(':');
      const objectUser = {
        firstname: firstname.toUpperCase(),
        lastname: lastname.toUpperCase(),
      };
      return objectUser;
    })
    .sort((a, b) => {
      if (a.lastname !== b.lastname) {
        return a.lastname.localeCompare(b.lastname);
      } else {
        return a.firstname.localeCompare(b.firstname);
      }
    })
    .map(user => `(${user.lastname}, ${user.firstname})`)
    .join('');

  return users;
}

function meeting2(s) {
  return s
    .toUpperCase()
    .split(';')
    .sort((str1, str2) => {
      str1 = str1.split(':'); // ["Fred", "Corwil"]
      str2 = str2.split(':'); // ["Adam", "Corwil"]

      if (str1[1] === str2[1]) {
        return str1[0].localeCompare(str2[0]);
      }

      return str1[1].localeCompare(str2[1]);
    })
    .map(str => {
      const [firstname, lastname] = str.split(':');
      return `(${lastname}, ${firstname})`;
    });
}

console.log(meeting2(s));

// ======================================================
// https://www.codewars.com/kata/5783ef69202c0ee4cb000265

// ======================================================
// https://www.codewars.com/kata/60cc93db4ab0ae0026761232

S = [1, 2, 3, 4, 5, 6, 7, 8]; // 5,2,3,4,6,undefined

// function arrange(s) {
//   const T = [];
//   while (S.length > 0) {
//     T.push(S.shift());

//     if (S.length > 0) T.push(S.pop());

//     S.reverse();
//   }
//   return T;
// }

function arrange(s) {
  const T = [];

  for (let i = 0; i < s.length / 2; i++) {
    const first = s[i];
    const last = s[s.length - 1 - i];

    if (i % 2 === 0) {
      T.push(first, last);
    } else {
      T.push(last, first);
    }
  }

  if (S.length % 2 !== 0) {
    T.pop();
  }
  return T;
}

console.log(arrange(S));
// ======================================================
// https://www.codewars.com/kata/513e08acc600c94f01000001
// ======================================================
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
// ======================================================
// =====================================================

// function encryptThis(text) {
//   return text.split(' ').map(encryptWord);
// }

// function encryptWord(word) {

// }

// encryptThis('Hello Wolrd');

// ======================================================

// function decipherThis(str) {
//   return str.split(' ').map(decodeWord).join(' ');
// }

// function decodeWord(word) {
// }

// console.log(decodeWord('72olle'));
// ======================================================
