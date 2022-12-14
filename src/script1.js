/* 
createProduct(obj, callback) - принимает объект товара без id, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.

logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль

logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль
*/

function createProduct(obj, callback) {
  const object = {
    id: randomId(),
    ...obj,
  };
  callback(object);
}

function logProduct(object) {
  console.log(object);
}

function logTotalPrice(object) {
  console.log(object.price * object.quantity);
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// =======

function randomId() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}
