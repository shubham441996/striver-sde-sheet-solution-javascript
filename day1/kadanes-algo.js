// Logic for this Algo
/**
 * This algo return the max consecutive sum in an array which have both types pf element positive and negative:
 * 1. Take two variable sum and max_sum
 * 2. Start iterating and add the element to the sum varibale and update the max_sum if sum is greater than max_sum
 *          (sum> max_sum)=> update max_sum
 * 3. if sum is less than 0 update the sum to zero
 * @param {*} array
 * @returns
 */

function kadanesAlgo(array) {
  let sum = 0,
    maxSum = Number.NEGATIVE_INFINITY;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}
let input = [-1, -2, -3, -4];
console.log(kadanesAlgo(input));
