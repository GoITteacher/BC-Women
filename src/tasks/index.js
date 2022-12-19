// function func() {
//   console.log(this);
// }

// let user = {
//   firstName: 'Вася',
//   func: func,
// };

// const user2 = {};

// const func3 = user.func.bind(user2);

// func3.call(user);

// 1. arrow - 11
// 2. bind - 10
// 3. call-aply - 7
// 4. obj - 5
// 5. window - 2

// 1. визначити тип функції
// 2. якщо стрілчата то визначити контекст бат. функції
// 3. якщо звичайна то дивимось момент виклику

// =========================================

// const obj2 = {
//   name: 'obj2',
// };

// let obj1 = {
//   name: 'obj1',
//   func() {
//     console.log('this', this); // obj2
//     return () => {
//       console.log(this); // obj2
//     };
//   },
// };

// const foo = obj1.func;
// const newFunc = foo();
// newFunc();

// console.log(newFunc);

// =========================================
// const TESTOBJ = {
//   name: 'test',
// };
// const obj1 = {
//   name: 'obj1',
//   func() {
//     return () => {
//       console.log('ARROW', this);
//     };
//   },
// };

// const obj2 = {
//   name: 'obj2',
// };

// const newFunc2 = obj1.func.bind(TESTOBJ)();
// newFunc2();
// =========================================

// const obj1 = {
//   name: 'obj1',
// };

// const obj2 = {
//   name: 'obj2',
// };

// const obj3 = {
//   name: 'obj3',
//   foo() {
//     console.log(this); // obj3
//     return function () {
//       console.log(this);
//     };
//   },
// };

// const myFoo = obj3.foo();

// obj1.foo1 = myFoo;

// obj2.foo2 = obj1.foo1;

// obj2.foo2();

// =============

// const obj = {
//   foo() {
//     console.log(this);
//   },
// };

// obj.foo();
