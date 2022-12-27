/* // function fn(buyers, cases) {
//   const objCases = {};
//   for (let i = 0; i < cases; i++) {
//     objCases[i] = 0;
//   }

//   for (let buyer of buyers) {
//     const index = findIndex(objCases);
//     objCases[index] += buyer;
//   }

//   return objCases;
// }

// =============================

function fn(buyers, cases) {
  const objCases = {};
  for (let i = 0; i < cases; i++) {
    objCases[i] = 0;
  }

  return buyers.reduce((prev, value) => {
    const index = findIndex(prev);
    prev[index] += value;
    return prev;
  }, objCases);
}

function findIndex(objCases) {
  const min = Math.min(...Object.values(objCases)); // 15
  const index = Object.values(objCases).indexOf(min);
  return index;
}
console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));

// 1=12
//
 */
