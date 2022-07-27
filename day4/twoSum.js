function twoSum(arr, res) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[res - arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      (hash[res - arr[i]] === 0 || hash[res - arr[i]]) &&
      hash[arr[i]] !== i
    ) {
      return [i, hash[arr[i]]];
    }
  }
}
let input = [2, 7, 11, 15];
let res = twoSum(input, 9);
console.log(res);

countTheNumberOfSubarraysWithGivenXorK;
