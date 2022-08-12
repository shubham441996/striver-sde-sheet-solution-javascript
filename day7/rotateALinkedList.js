const { LinkedList } = require("../day5/linkedList");
function rotateALinkedList(input, k) {
  let list = new LinkedList();
  list.arrayToList(input);
  for (let i = 0; i < k % input.length; i++) {
    list.moveLastElementToFirst();
  }
  console.log(list.printList());
}
function rotateALinkedListOptimal(input, k) {
  let list = new LinkedList();
  list.arrayToList(input);
  let current = list.head;
  let length = 0;
  while (current && current.next) {
    current = current.next;
    length++;
  }
}
let input = [1, 2, 3, 4, 5, 6, 7];
rotateALinkedList(input, 10);
