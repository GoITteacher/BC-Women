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

// ==========================

// ==========================

/* 
Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.
*/

// console.log(cars);
// console.log(makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.4));

// =============================

/* 
Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.
*/

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
// console.table(filterByPrice(cars, 23000));

// =========================

/* 
Пусть функция `getCarsWithDiscount` возвращает массив автомобилей свойство
onSale которых true.
*/

// console.log(getCarsWithDiscount(cars));

// ============================

/* Пусть функция `getCarsWithType` возвращает массив автомобилей тип которых
совпадает со значением параметра `type`. */

// console.log(getCarsWithType(cars, 'suv'));
// console.log(getCarsWithType(cars, 'sedan'));

// ========================
//getCarByModel

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// =====================

/* Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
отсортированный по возврастанию значения свойства `amount`. */

// console.table(sortByAscendingAmount(cars));

// =================

/*
Пусть функция `sortByDescendingPrice` возвращает новый массив автомобилей
отсортированный по убыванию значения свойства `price`.
*/

// console.table(sortByDescendingPrice(cars));

// =====================

/* Пусть функция `sortByModel` возвращает новый массив автомобилей отсортированный
по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от
значения параметра `order`. */

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// =================
/* Пусть функция `getTotalAmount` возвращает общее количество автомобилей(значение
свойств `amount`). */

// console.log(getTotalAmount(cars));

// ===========================

/* Пусть функция `getAvailableCarNames` возвращает массив моделей автомобилей, но
только тех, которые сейчас на распродаже. */

// const getModelsOnSale1 = cars => {
//   return cars.filter(el => el.onSale === true).map(el => el.model);
// };

// const getModelsOnSale2 = cars => {
//   return cars.map(el => el.model).filter(el => el.onSale === true);
// };

// const getModelsOnSale3 = cars => {
//   return cars.reduce((acc, car) => {
//     if (car.onSale) {
//       acc.push(car.model);
//     }
//     return acc;
//   }, []);
// };

// console.table(getModelsOnSale3(cars));

// ===========================
/* 
Пусть функция `getSortedCarsOnSale` возвращает массив автомобилей на распродаже
(свойство onSale), отсортированных по возрастанию цены. */

// console.table(getSortedCarsOnSale(cars));

/// ========================

// function encryptThis(text) {
//   return text.split(' ').map(encryptWord);
// }

// function encryptWord(word) {

// }

// encryptThis('Hello Wolrd');

// ============================

// function decipherThis(str) {
//   return str.split(' ').map(decodeWord).join(' ');
// }

// function decodeWord(word) {
// }

// console.log(decodeWord('72olle'));
