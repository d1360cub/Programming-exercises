function clearArray(arr) {
  return arr.reduce((acc, cur) => {
    if (cur) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
