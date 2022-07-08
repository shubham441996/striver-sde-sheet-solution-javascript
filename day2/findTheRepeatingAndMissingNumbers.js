function findTheRepeatingAndMissingNumbersCount(arr) {
  let replica = [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!replica[arr[i]]) {
      replica[arr[i]] = 1;
    } else {
      replica[arr[i]]++;
    }
  }
  for (let i = 1; i < arr.length + 1; i++) {
    if (!replica[i]) {
      res.push(i);
    }
    if (replica[i] > 1) {
      res.push(i);
    }
  }
}

function findTheRepeatingAndMissingNumbersXoR(arr) {
  let xor = arr[0];
  let n = arr.length;
  let x = 0;
  let y = 0;
  for (let i = 1; i < arr.length; i++) {
    xor ^= arr[i];
  }
  for (let i = 1; i <= arr.length; i++) {
    xor ^= arr[i];
  }
  let setBit = xor & ~(xor - 1);
  for (i = 0; i < n; i++) {
    if ((arr[i] & setBit) != 0) {
      x = x ^ arr[i];
    } else {
      y = y ^ arr[i];
    }
    /* arr[i] belongs to first set */
    /* arr[i] belongs to second set*/
  }
  for (i = 1; i <= n; i++) {
    if ((i & setBit) != 0) {
      /* i belongs to first set */
      x = x ^ i;
    } else {
      /* i belongs to second set*/
      y = y ^ i;
    }
  }
  console.log(x, y);
}
let input = [3, 1, 2, 5, 4, 6, 7, 5];
findTheRepeatingAndMissingNumbersXoR(input);
