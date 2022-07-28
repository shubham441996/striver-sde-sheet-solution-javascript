const { LinkedList, Node } = require("./linkedList");

function mergeTwoSortedLinkedLists(input1, input2) {
  let list1 = new LinkedList();
  list1.arrayToList(input1);
  let list2 = new LinkedList();
  list2.arrayToList(input2);
  let l1 = list1.head;
  let l2 = list2.head;
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  if (l1.val > l2.val) {
    let _temp = l2;
    l2 = l1;
    l1 = _temp;
  }
  let res = l1;
  while (l1 && l2) {
    let temp = null;
    while (l1 && l1.val <= l2.val) {
      temp = l1;
      l1 = l1.next;
    }
    temp.next = l2;
    let _temp = l2;
    l2 = l1;
    l1 = _temp;
  }
  return res;
}
let input1 = [1, 2, 5, 8, 10];
let input2 = [3, 7, 9];
let res = mergeTwoSortedLinkedLists(input1, input2);
let current = res;
let str = "";
while (current) {
  str += `${current.val}-->`;
  current = current.next;
}
console.log(str);
