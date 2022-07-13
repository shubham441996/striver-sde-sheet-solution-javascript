function longestConsecutiveSequence(inp) {
  let hash = inp.reduce((a, b) => {
    a[b] = 1;
    return a;
  }, {});
  let longestSequenceCount = 0;
  for (let i = 0; i < inp.length; i++) {
    if (!hash[inp[i] - 1]) {
      let currentSequenceCount = 0;
      let ele = inp[i];
      while (hash[ele]) {
        currentSequenceCount++;
        ele++;
      }
      longestSequenceCount = Math.max(
        currentSequenceCount,
        longestSequenceCount
      );
    }
  }
  return longestSequenceCount;
}
let input = [100, 200, 1, 3, 2, 4, 101, 102, 103, 104];
let result = longestConsecutiveSequence(input);
console.log(result);
largestSubarrayWith0Sum;
