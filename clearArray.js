function clearArray(arr) {
  return arr.reduc((acc, cur) => {
    if (cur) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
