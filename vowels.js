function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = 0;
  /*for (let char of word) {
    console.log(char);
    if (vowels.includes(char)) {
      result++;
    }
  }*/
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word.charAt(i))) {
      result++;
    }
  }
  return result;
}

console.log(countVowels('arboles'));
