function multiply(num1, num2) {
  let result = 0;
  let positive = Math.abs(num2) == num2;
  for (let i = 0; i < Math.abs(num2); i++) {
    positive ? (result += num1) : (result -= num1);
  }
  console.log(result);
}
