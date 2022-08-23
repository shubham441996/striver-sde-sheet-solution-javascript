function minimumNumberOfPlatformsRequiredForARailway(input1, input2) {
  input1 = input1.sort((a, b) => a - b);
  input2 = input2.sort((a, b) => a - b);
  let platform = 1;
  let result = 1;
  let i = 1;
  let j = 0;
  let n = input1.length;
  while (i < n && j < n) {
    if (input1[i] <= input2[j]) {
      platform++;
      i++;
    } else {
      platform--;
      j++;
    }
    result = Math.max(result, platform);
  }

  return result;
}
let input1 = [0900, 0940, 0950, 1100, 1500, 1800];
let input2 = [0910, 1200, 1120, 1130, 1900, 2000];
let result = minimumNumberOfPlatformsRequiredForARailway(input1, input2);
console.log(result);
