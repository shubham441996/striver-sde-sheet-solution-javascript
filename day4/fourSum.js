function fourSum(input, res) {
  input = input.sort((a, b) => a - b);
  let values = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      let left = j + 1;
      let right = input.length - 1;
      let tempSum = input[i] + input[j];
      let subSum = res - tempSum;
      while (left < right) {
        if (input[left] + input[right] > subSum) {
          right--;
        } else if (input[left] + input[right] < subSum) {
          left++;
        } else {
          values.push([input[i], input[j], input[left], input[right]]);
          left++;
        }
      }
    }
  }
  return values;
}

let input = [1, 0, -1, 0, -2, 2];

let res = fourSum(input, 0);
console.log(res);
