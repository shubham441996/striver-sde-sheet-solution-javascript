const { LinkedList, Node } = require("./linkedList");

function removeNThNodeFromTheEndOfALinkedList(input, n) {
  let list = new LinkedList();
  list.arrayToList(input);
  let l1 = list.head;
  let slow = l1;
  let fast = l1;
  n = input.length % n;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return list;
}
let input = [1, 2, 3, 4, 5, 6, 7, 8];
removeNThNodeFromTheEndOfALinkedList(input, 8).printList();
