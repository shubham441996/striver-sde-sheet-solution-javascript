function countMaximumConsecutiveOneSInTheArray(input) {
  let maxCount = 0;
  let count = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i]) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      maxCount = Math.max(maxCount, count);
      count = 0;
    }
  }
  return maxCount;
}
let input = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1];
let res = countMaximumConsecutiveOneSInTheArray(input);
console.log(res);
