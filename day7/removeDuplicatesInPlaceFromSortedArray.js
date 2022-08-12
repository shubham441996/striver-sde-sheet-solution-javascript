function removeDuplicatesInPlaceFromSortedArray(input) {
  let i = 0;
  for (let j = 1; j < input.length; j++) {
    if (input[i] !== input[j]) {
      i++;
      input[i] = input[j];
    }
  }
  return input.slice(0, i + 1);
}

let input = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
let result = removeDuplicatesInPlaceFromSortedArray(input);
console.log(result);
