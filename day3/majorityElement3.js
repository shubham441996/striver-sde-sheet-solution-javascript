/**
 * 1. Moore's Voting Algorithm
 *
 */

function majorityElementBy3(arr) {
  let count1 = 0;
  let ele1;
  let count2 = 0;
  let ele2;

  for (let i = 0; i < arr.length; i++) {
    if (ele1 === arr[i]) {
      count1++;
    } else if (ele2 === arr[i]) {
      count2++;
    } else if (count1 === 0) {
      ele1 = arr[i];
    } else if (count2 === 0) {
      ele2 = arr[i];
    } else {
      count1--;
      count2--;
    }
  }
  return [ele1, ele2];
}
let input = [1, 2, 2, 3, 2];
let result = majorityElementBy3(input);
console.log(result);
