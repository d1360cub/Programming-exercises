function moveZeros(arr) {
  const withoutZeros = arr.filter((item) => item !== 0);
  while (arr.length > withoutZeros.length) {
    withoutZeros.push(0);
  }
  return withoutZeros;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
