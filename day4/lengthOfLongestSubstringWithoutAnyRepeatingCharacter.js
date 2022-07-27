function lengthOfLongestSubstringWithoutAnyRepeatingCharacter(input) {
  let char = input.split("");
  let set = new Set();
  let left = 0;
  let right = 0;
  let maxLen = 0;
  for (let i = 0; i < char.length; i++) {
    if (set.has(char[i])) {
      set.delete(char[i]);
      left += 1;
    } else {
      set.add(char[i]);
      right += 1;
    }
    maxLen = Math.max(right - left, maxLen);
  }
  return maxLen;
}

let input = "bbbbb";
let res = lengthOfLongestSubstringWithoutAnyRepeatingCharacter(input);
console.log(res);
