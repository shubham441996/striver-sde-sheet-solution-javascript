function gridUniquePath(m, n, i, j) {
  let count = 0;
  if (i === m - 1 && j === n - 1) {
    count++;
  }
  count += isValidTraversal(i, j + 1, m, n) && gridUniquePath(m, n, i, j + 1);
  count += isValidTraversal(i + 1, j, m, n) && gridUniquePath(m, n, i + 1, j);
  return count;
}

function isValidTraversal(i, j, m, n) {
  if (i < m && j < n && i >= 0 && j >= 0) {
    return true;
  }
  return false;
}

let result = gridUniquePath(3, 7, 0, 0);
console.log(result);
