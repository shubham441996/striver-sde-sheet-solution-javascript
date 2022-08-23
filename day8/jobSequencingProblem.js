function jobSequencingProblem(input) {
  input = input.sort(
    ([seq1, time1, profit1], [seq2, time2, profit2]) => profit2 - profit1
  );
  let len = Math.max(...input.map((ele) => ele[1]));
  console.log(len);
  let result = new Array(len).fill(-1);
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    let [id, time, profit] = input[i];
    if (result[time - 1] < 0) {
      result[time - 1] = id;
      sum += profit;
    } else {
      let j = time - 1;
      while (result[j] !== -1 && j >= 0) {
        j--;
      }
      if (j >= 0) {
        result[j] = id;
        sum += profit;
      }
    }
  }
  return { result, sum };
}

let input = [
  [1, 2, 100],
  [2, 1, 19],
  [3, 2, 27],
  [4, 1, 25],
  [5, 1, 15],
];

let res = jobSequencingProblem(input);
console.log(res);
