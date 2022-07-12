function majorityElementByHalf(arr) {
  let element;
  let count = 0;
  for (let i of arr) {
    if (count === 0) {
      element = i;
    }
    if (element === i) {
      count++;
    } else {
      count--;
    }
  }
  return element;
}
let input = [4, 4, 2, 4, 3, 4, 4, 3, 2, 4];
let result = majorityElementByHalf(input);
console.log(result);
