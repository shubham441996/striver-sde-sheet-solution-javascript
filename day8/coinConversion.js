function coinConversion(input) {
  let coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
  let i = coins.length - 1;
  let total = 0;
  let moneyNote = [];
  while (input && i > -1) {
    if (input >= coins[i]) {
      input -= coins[i];
      moneyNote.push(coins[i]);
      total++;
    } else {
      i--;
    }
  }
  console.log(total, moneyNote);
}
coinConversion(199);
