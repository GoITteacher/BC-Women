function fibba(index) {
  if (index < 3) return 1;
  return fibba(index - 1) + fibba(index - 2);
}

for (let i = 1; i < 10; i++) {
  console.log(fibba(i));
}
