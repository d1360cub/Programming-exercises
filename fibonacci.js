function fibonacci(x) {
  let fib = [0, 1];
  for (let i = 2; i <= x; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  console.log(fib);
  console.log(fib[x]);
}
