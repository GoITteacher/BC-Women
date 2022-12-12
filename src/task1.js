const stones = [
  { name: 'Изумруд', price: 1300, quantity: 4 },
  { name: 'Бриллиант', price: 2700, quantity: 3 },
  { name: 'Сапфир', price: 400, quantity: 7 },
  { name: 'Щебень', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
      return stone.price * stone.quantity;
    }
  }

  return 0;
}

const res = calcTotalPrice(stones, 'Сапфир');

console.log(res);
