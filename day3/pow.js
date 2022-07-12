function power(a, b) {
  // 1st check is it odd or even
  let nn = b;
  let ans = 1.0;
  if (nn < 0) {
    nn = -1 * nn;
  }
  while (nn > 0) {
    if (nn & 1) {
      ans *= a;
      nn -= 1;
    } else {
      a *= a;
      nn /= 2;
    }
  }
  if (b > 0) {
    return ans;
  } else {
    return 1 / ans;
  }
  // 2nd check
}

let result = power(5, 5);
console.log(result);
