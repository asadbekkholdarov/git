function hello() {
  if (true) return "2";
  for (let i = 1; i < 10; i++) {
    console.log(i);
  }
  return `hello world!`;
}

console.log(hello());
