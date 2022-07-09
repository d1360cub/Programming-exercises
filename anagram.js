function anagram(word1, word2) {
  if (word1.length != word2.length) {
    return false;
  } else {
    word1Sortened = word1.split('').sort().join('');
    word2Sortened = word2.split('').sort().join('');
    if (word1Sortened === word2Sortened) {
      return true;
    } else {
      return false;
    }
  }
}
