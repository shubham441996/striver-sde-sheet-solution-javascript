function trappingRainWater(input) {
  let leftMax = 0;
  let rightMax = getMaxRight(0);
  let trappedWater = 0;
  // Math.min(leftMax,rightMax)-input[i]

  for (let i = 1; i < input.length; i++) {
    if (i >= rightMax) {
      rightMax = getMaxRight(i);
    }
    if (input[i] < input[leftMax]) {
      trappedWater += Math.min(input[leftMax], input[rightMax]) - input[i];
    } else {
      leftMax = i;
    }
  }
  function getMaxRight(index) {
    let rightMax = index;
    for (let i = index; i < input.length; i++) {
      if (input[i] > input[rightMax]) {
        rightMax = i;
      }
    }
    return rightMax;
  }
  return trappedWater;
}
let input = [2, 1, 0, 2, 1, 0, 1, 3, 2, 1, 3, 1];
let result = trappingRainWater(input);
console.log(result);
