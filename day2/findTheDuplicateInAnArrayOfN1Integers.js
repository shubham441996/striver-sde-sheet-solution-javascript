function findTheDuplicateInAnArrayOfN1Integers(arr) {
  let tortoise = arr[0];
  let hare = arr[tortoise];
  while (tortoise !== hare) {
    tortoise = arr[tortoise];
    hare = arr[arr[hare]];
  }
  tortoise = 0;
  while (tortoise !== hare) {
    tortoise = arr[tortoise];
    hare = arr[hare];
  }
  return hare;
}

let input = [1, 3, 4, 6, 2, 5, 6];
let result = findTheDuplicateInAnArrayOfN1Integers(input);
console.log(result);
