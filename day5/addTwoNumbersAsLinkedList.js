const { LinkedList, Node } = require("./linkedList");

function addTwoNumbersAsLinkedList(input1, input2) {
  let list1 = new LinkedList();
  let list2 = new LinkedList();
  let list3 = new LinkedList();
  list1.arrayToList(input1);
  list2.arrayToList(input2);
  let l1 = list1.head;
  let l2 = list2.head;
  let carry = 0;
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  while (l1 && l2) {
    let sum = l1.val + l2.val + carry;
    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    } else {
      carry = 0;
    }
    console.log(carry);
    list3.add(sum);
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    list3.add(l1.val + carry);
    carry = 0;
  }
  while (l2) {
    list3.add(l1.val + carry);
    carry = 0;
  }
  if (carry) {
    list3.add(1);
  }
  return list3;
}
let input1 = [9, 9, 9];
let input2 = [5, 6, 4];
let res = addTwoNumbersAsLinkedList(input1, input2);
console.log(res);
let current = res.head;
let str = "";
while (current) {
  str += `${current.val}-->`;
  current = current.next;
}
console.log(str);
