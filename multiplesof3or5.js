function solution(number) {
  if (number < 0) {
    return 0;
  }
  let arr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push(i);
    } else if (i % 3 === 0) {
      arr.push(i);
    } else if (i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((out, cur) => out + cur, 0);
}

console.log(solution(10));
console.log(solution(20));
