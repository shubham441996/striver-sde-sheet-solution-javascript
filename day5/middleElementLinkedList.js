const { LinkedList, Node } = require("./linkedList");

function middleElementInLinkedList(input) {
  let list = new LinkedList();
  list.arrayToList(input);
  let slow = list.head;
  let faster = slow.next;
  while (faster) {
    faster = faster.next && faster.next.next;
    slow = slow.next;
  }
  return slow;
}

let input = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(middleElementInLinkedList(input));
