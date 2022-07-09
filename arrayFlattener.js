function flatten(arr) {
  return arr.reduce((acc, cur) => acc.concat(cur), []);
}

console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);
