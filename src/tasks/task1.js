// let elem = {
//   value: 'elem',
// };

// function func(a, b) {
//   const arrow = (a, b) => {
//     console.log(this);
//   };

//   arrow();
// }

// func.call(elem);
// =======================

let elem = {
  value: '123',
};

function func(a, b) {
  const arrow = (a, b) => {
    const test = () => {
      console.log(this);
    };

    test();
  };

  arrow();
}

func.call(elem);
