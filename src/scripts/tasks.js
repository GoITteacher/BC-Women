//                 |
const arr = [0, 1, 4, 7, 8, 9, 4, 9, 2, 3, 0];
// .                     |

// for (let j = 0; j < arr.length - 1; j++) {
//   let minIndex = j;
//   for (let i = j; i < arr.length; i++) {
//     if (arr[minIndex] > arr[i]) minIndex = i;
//   }
//   arr.splice(j, 0, ...arr.splice(minIndex, 1));
// }

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
}

for (let y = 0; y < arr.length; y++) {
  for (let x = 0; x < arr[y].length; x++) {
    for (let y1 = 0; y1 < arr.length; y1++) {
      for (let x1 = 0; x1 < arr[y1].length; x1++) {
        let first = arr[y][x];
        let second = arr[y1][x1];
        if (second < first) {
          let temp = arr[y][x];
          arr[y][x] = arr[y1][x1];
          arr[y1][x1] = temp;
        }
      }
    }
  }
}

// =================

const nums = [2, 4, 0, 0, 4, 2, 3, 2];

function foo(arr) {
  let counter = 0;

  while (!arr.every(x => x == 0)) {
    const max = Math.max(...arr);
    const firstIndex = arr.indexOf(max);
    const lastIndex = arr.lastIndexOf(max);
    if (firstIndex === lastIndex) {
      arr[firstIndex]--;
    } else {
      for (let i = firstIndex; i <= lastIndex; i++) {
        if (arr[i] === max) {
          arr[i]--;
        } else {
          counter++;
        }
      }
    }
  }

  console.log(counter);
}

foo(nums);
