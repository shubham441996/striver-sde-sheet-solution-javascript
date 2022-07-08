function mergeOverlappingSubintervals(intervals) {
  intervals = intervals.sort(
    ([left1, right1], [left2, right2]) => left1 - left2
  );

  for (let i = 0; i < intervals.length; i++) {
    if (intervals.length > i + 1) {
      let [left1, right1] = intervals[i];
      let [left2, right2] = intervals[i + 1];
      if (right1 > left2) {
        intervals[i] = [left1, Math.max(right1, right2)];
        intervals.splice(i + 1, 1);
        i--;
      }
    }
  }
  return intervals;
}
let intervals = [
  [15, 18],
  [1, 3],
  [2, 9],
  [8, 16],
];
let result = mergeOverlappingSubintervals(intervals);
console.log(result);
