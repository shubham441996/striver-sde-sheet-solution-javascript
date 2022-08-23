function nMeetingInOneRoom(start, end) {
  let input = start
    .map((ele, index) => [index + 1, ele, end[index]])
    .sort(([_1, a1, b1], [_2, a2, b2]) => b1 - b2);
  console.log(input);
  let k = 0;
  let meetings = [1];
  for (let i = 1; i < input.length; i++) {
    let [_1, start1, end1] = input[k];
    let [_2, start2, end2] = input[i];
    if (start2 > end1 && end1 < end2) {
      k = i;
      meetings.push(i + 1);
    }
  }
  return meetings;
}

let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 5, 7, 9, 9];
let res = nMeetingInOneRoom(start, end);
console.log(res);
