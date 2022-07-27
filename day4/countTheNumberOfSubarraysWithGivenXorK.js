function countTheNumberOfSubarraysWithGivenXorK(input, k) {
  //
  let hash = {};
  let xor = 0;
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    xor ^= input[i];
    if (hash[xor ^ k]) {
      count += hash[xor ^ k];
    }
    if (hash[xor ^ k]) {
      hash[xor ^ k]++;
    } else {
      hash[xor ^ k] = 1;
    }
  }
  return count;
}
let input = [4, 2, 2, 6, 4];
let res = countTheNumberOfSubarraysWithGivenXorK(input, 6);
console.log(res);
lengthOfLongestSubstringWithoutAnyRepeatingCharacter;
