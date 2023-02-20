function kidsWithCandies(candies, extraCandies) {
  const biggestCandy = candies.reduce((acc, cur) => (acc > cur ? acc : cur));
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= biggestCandy) {
      result.push(true);
    } else result.push(false);
  }
  return result;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
