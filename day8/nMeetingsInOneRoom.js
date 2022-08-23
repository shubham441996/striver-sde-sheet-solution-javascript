function nMeetingsInOneRoom(input1, input2) {
  let input = input1.reduce((a, b, index) => {
    a.push([b, input2[index]]);
    return a;
  }, []);
  input.sort(([_1, a], [_2, b]) => a - b);
  console.log(input);
  let result = [];
  let k = 0;
  result.push(input[k]);
  for (let i = 1; i < input.length; i++) {
    let [start, end] = input[k];
    let [secondStart, secondEnd] = input[i];
    if (end < secondStart && end < secondEnd) {
      result.push(input[i]);
      k = i;
    }
  }
  return result;
}
let input1 = [1, 3, 0, 5, 8, 5];
let input2 = [2, 4, 5, 7, 9, 9];
let res = nMeetingsInOneRoom(input1, input2);
console.log(res);
