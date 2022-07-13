function largestSubarrayWith0Sum(input) {
  let maxi = 0;
  let sum = 0;
  let hash = {};
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
    if (sum === 0) {
      maxi = i + 1;
    } else {
      if (hash[sum]) {
        maxi = Math.max(maxi, i - hash[sum]);
      } else {
        hash[sum] = i;
      }
    }
  }
  return maxi;
}
let input = [9, -3, 3, -1, 6, -5];
let result = largestSubarrayWith0Sum(input);
console.log(result);
