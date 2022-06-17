/**
 * 1.Take 3 varibale low(0) medium(1) high(2)
 * 2.if you found 0 update the low and medium and update
 * 3. if you found 1 update the  medium.
 * 4. if you found 2 update the high with high -- and shift the element at last
 *
 * @param {*} arr
 * @returns
 */

function dutchNationFlag(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    switch (arr[mid]) {
      case 0:
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      default:
        [arr[high], arr[mid]] = [arr[mid], arr[high]];
        high--;
        break;
    }
  }
  return arr;
}

let input = [2, 0, 2, 1, 1, 0];
let result = dutchNationFlag(input);
console.log(result);
