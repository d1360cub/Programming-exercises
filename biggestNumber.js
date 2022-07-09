function biggest(arr) {
  arr.reduce((acc, cur) => (acc > cur ? acc : cur));
}
