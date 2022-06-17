function setMatrixZeros(array) {
  let m = array.length;
  let n = array[0].length;
  let row = [];
  let column = [];
  if (m && n) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (!array[i][j]) {
          row[i] = 0;
          column[j] = 0;
        }
      }
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (row[i] === 0 || column[j] === 0) {
          array[i][j] = 0;
        }
      }
    }
    return array;
  } else {
    return array;
  }
}
// 1010
let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

console.log(setMatrixZeros(matrix));
