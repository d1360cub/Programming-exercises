function pigIt(str) {
  str = str.split(' ');
  const signs = ['!', ',', '?'];
  let result = [];
  let temp = [];
  while (str.length > 0) {
    temp = str.shift().split('');
    let first = temp.shift();
    if (!signs.includes(first)) {
      temp.push(first + 'ay');
      result.push(temp.join(''));
    } else {
      result.push(first);
    }
  }
  return result.join(' ');
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));
