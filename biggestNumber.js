function biggest(arr) {
  return arr.reduce((acc, cur) => (acc > cur ? acc : cur));
}
