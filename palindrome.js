function isPalindrome(phrase) {
  const noSpaces = phrase.split(' ').join('');
  const reversed = noSpaces.split('').reverse().join('');
  return noSpaces == reversed;
}

console.log(isPalindrome('anita lava la tina'));
console.log(isPalindrome('esto no es un palindromo'));
