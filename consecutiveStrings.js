/*function longest_consec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return '';
  }
  var max = 0;
  var maxStr = '';
  for (var i = 0; i < strarr.length - k + 1; i++) {
    var temp = strarr.slice(i, i + k).join('');
    if (temp.length > max) {
      max = temp.length;
      maxStr = temp;
    }
  }
  return maxStr;
}*/

function longest_consec(strarr, k) {
  let current = '';
  let maxLenght = 0;
  let longestConcat = '';
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return '';
  }

  if (k === 1) {
    for (let i = 0; i <= strarr.length; i++) {
      current = strarr[i];
      if (current.length > maxLenght) {
        maxLenght = current.length;
        longestConcat = current;
      }
    }
  } else {
    for (let i = 0; i <= strarr.length - k; i++) {
      current = strarr[i];
      for (let j = 0; j < k - 1; j++) {
        current += strarr[i + j + 1];
        if (current.length > maxLenght) {
          maxLenght = current.length;
          longestConcat = current;
        }
      }
    }
  }
  return longestConcat;
}

console.log(
  longest_consec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)
);
