// ============================
/* Напишите функцию each(array, callback), которая первым параметром ожидает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека. */

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );
// ============================

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// };

// const logProduct = product => {
//   console.log(product);
// };

// const logTotalPrice = product => {
//   console.log(product.price * product.quantity);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// ============================

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//
// };

// const handleSuccess = message => {
//   console.log(`✅ Success! ${message}`);
// };
// const handleError = message => {
//   console.log(`❌ Error! ${message}`);
// };

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// ============================

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// ============================

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ============================

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ============================

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// ============================

/* 


oddOne([4, -8, 98, -12, -7, 90, 100]); // => 4 */

// ============================
// function randomId() {
//   return Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1);
// }
///====================

// =========================

/* Буде подано список S. Вам потрібно створити з нього список T, виконавши наведений процес:

Видаліть перший і останній елемент зі списку S і додайте їх до списку T.

Переверніть список S

Повторюйте процес, доки список S не буде порожнім.


Наведений вище процес призводить до вичерпання списку S. Ваше завдання полягає в тому, щоб створити список T без зміни вхідного списку S.
 */

// function arrange(s) {
//
// }

// console.log([1, 2, 3, 4, 5, 6]);

/* 
S = [1,2,3,4,5]
T = [1,5,4,2,3,]

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T
*/

// =============================

/* function searchArray(arrayToSearch, query) {
  let res = -1;

  if (!Array.isArray(query) || query.length !== 2) {
    return 'throw Error';
  }

  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i].length !== 2) {
      return 'throw Error';
    }

    if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1] && res === -1) {
      res = i;
    }
  }

  return res;
}
 */
/* 

You will be required to validate the inputs on the following criteria:

each element of the array to be searched should be an array;
each sub-array in the two-dimensional array should be of length two; and
query should be an array of length two.


var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
arrayToSearch = [1,2,3,4,5,6]; // => throw Error
arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
var query = [1,2]; // => valid input
query = 5; // => throw Error
query = [9,2,1]; // => throw Error
*/

// ===================

function upArray(arr) {
  if (arr.length === 0) return null;
  if (arr.filter(el => el >= 10 || el < 0).length > 0) return null;
  let temp = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (++arr[i] >= 10) {
      arr[i] = 0;
    } else {
      break;
    }
    if (i == 0) {
      temp = true;
    }
  }
  if (temp) arr.unshift(1);
  return arr;
}

console.log(upArray([1, -9]));
console.log(upArray([0, 1, 3, 7]));

/* 

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

*/
