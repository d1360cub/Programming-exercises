function countMatches(items, ruleKey, ruleValue) {
  let result = 0;
  switch (ruleKey) {
    case "type":
      for (let i = 0; i < items.length; i++) {
        if (items[i][0] === ruleValue) {
          result++;
        }
      }
      return result;
    case "color":
      for (let i = 0; i < items.length; i++) {
        if (items[i][1] === ruleValue) {
          result++;
        }
      }
      return result;
    case "name":
      for (let i = 0; i < items.length; i++) {
        if (items[i][2] === ruleValue) {
          result++;
        }
      }
      return result;
    default:
      return result;
  }
}

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
