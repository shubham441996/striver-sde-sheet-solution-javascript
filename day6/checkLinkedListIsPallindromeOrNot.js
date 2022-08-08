const { LinkedList } = require("../day5/linkedList");

function checkLinkedListIsPalindromeOrNot(input) {
  let list = new LinkedList();
  list.arrayToList(input);
  list.printList();
  let dummyNode = list.head;
  let fast = list.head;
  let slow = list.head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev = null;
  let current = slow.next;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  slow.next = prev;
  list.printList();
  let ptr1 = list.head;
  let ptr2 = slow.next;
  while (ptr1 && ptr2) {
    if (!(ptr1.val === ptr2.val)) {
      return false;
    }
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  return true;
}

let input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let result = checkLinkedListIsPalindromeOrNot(input);
console.log(result);
