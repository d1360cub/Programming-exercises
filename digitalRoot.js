function digital_root(n) {
  if (n < 10) {
    return n;
  } else {
    const toArray = n.toString().split('');
    const sum = toArray.reduce((acc, curr) => parseInt(acc) + parseInt(curr));
    return digital_root(sum);
  }
}

console.log(digital_root(16));
console.log(digital_root(456));
