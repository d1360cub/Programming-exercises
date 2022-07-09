function clearArray(arr) {
  arr.reduc((acc, cur) => {
    if (cur) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
