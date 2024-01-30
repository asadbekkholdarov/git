let count = 0;
for (let i = 0; i < 10; i++) {
  count += 1;
  if (count < 0) {
    console.log("-");
  } else {
    console.log("+");
  }
  count = count + 1;
  console.log(count);
}
