function threeSumWith(input, target) {
  let res = [];
  input = input.sort((a, b) => a - b);
  for (let i = 0; i < input.length - 2; i++) {
    let j = i + 1;
    let k = input.length - 1;
    while (j < k) {
      let sum = input[i];
      sum += input[j] + input[k];
      if (sum === target) {
        res.push([input[i], input[j], input[k]]);
        j++;
      } else if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }
  return res;
}

let input = [-1, 0, 1, 2, -1, -4];
let result = threeSumWith(input, 0);
console.log(result);
