function fractionalKnapsackProblem(weight, values) {
  let sortedValues = values.sort(([a1, a2], [b1, b2]) => b1 / b2 - a1 / a2);
  let sum = 0;
  for (let i = 0; i < sortedValues.length; i++) {
    let [val, weightUnit] = sortedValues[i];
    console.log(weight, weightUnit);
    if (weight >= weightUnit) {
      weight -= weightUnit;
      sum += val;
    } else {
      let temp = (val / weightUnit) * weight;
      sum += temp;
      return sum;
    }
  }
  return sum;
}
let values = [
  [100, 20],
  [60, 10],
  [120, 30],
];
let res = fractionalKnapsackProblem(50, values);
console.log(res);
