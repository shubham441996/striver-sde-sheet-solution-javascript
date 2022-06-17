function pascalTriangle(depth, n) {
  let array = [[]];
  for (let i = 0; i < depth; i++) {
    array[i] = [];
    array[i][0] = n;
    array[i][i] = n;
    for (let j = 1; j < i; j++) {
      array[i][j] = array[i - 1][j] + array[i - 1][j - 1];
    }
  }
  return array;
}
console.log(pascalTriangle(5, 1));
