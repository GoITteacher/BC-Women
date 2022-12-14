function createSum(start) {
  function test(x) {
    console.log(x + start);
  }
  return test;
}

const sum100 = createSum(100);
const sum500 = createSum(500);

sum100(10);
sum500(10);
sum100(20);
sum500(20);
sum100(30);
sum100(40);
