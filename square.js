function isSquare(n) {
  if (n < 0) {
    return false;
  }
  const square = Math.sqrt(n);
  const truncated = Math.trunc(square);
  return square !== truncated ? false : true;
}

console.log(isSquare(-1));
console.log(isSquare(4));
console.log(isSquare(26));
