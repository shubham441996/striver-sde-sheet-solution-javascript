let { Node, LinkedList } = require("../day5/linkedList");
function reverseLinkedListInGroupsOfSizeK(input, n) {
  let list = new LinkedList();
  list.arrayToList(input);
  console.log(list.printList(), "{{{{");
  let tempCurrent = list.head;
  let count = 0;
  while (tempCurrent) {
    count++;
    tempCurrent = tempCurrent.next;
  }
  let dummyNode = new Node(0);
  dummyNode.next = list.head;
  let current = list.head;
  let prev = dummyNode;
  let next = current.next;
  console.log(count);
  while (count >= n) {
    current = prev.next;
    next = current.next;
    for (let i = 1; i < n; i++) {
      current.next = next.next;
      next.next = prev.next;
      prev.next = next;
      next = current.next;
    }
    prev = current;
    count -= n;
  }
  list.printListByNode(dummyNode.next);
  return dummyNode.next;
}
let input = [1, 2, 3, 4, 5, 6, 7];
let result = reverseLinkedListInGroupsOfSizeK(input, 2);
