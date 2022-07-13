function isIsogram(str) {
  str = str.toLowerCase();
  let current = '';
  let next = '';
  for (let i = 0; i < str.length - 1; i++) {
    current = str.charAt(i);
    for (let j = i + 1; j < str.length; j++) {
      next = str.charAt(j);
      if (current === next) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('isogram'));
console.log(isIsogram('aba'));
