function countingWords(phrase) {
  const splittedPhrase = phrase.split(' ');
  const countedWords = splittedPhrase.reduce((out, cur) => {
    if (out[cur]) {
      out[cur]++;
    } else {
      out[cur] = 1;
    }
    return out;
  }, {});
  return countedWords;
}

console.log(countingWords('martin es un bebe muy hermoso'));
