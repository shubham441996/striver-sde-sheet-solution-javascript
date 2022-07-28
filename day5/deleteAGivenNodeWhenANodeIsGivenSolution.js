const { LinkedList, Node } = require("./linkedList");

function deleteAGivenNodeWhenANodeIsGiven(input, index) {
  let list = new LinkedList();
  list.arrayToList(input);
  let l1 = list.head;
  let node = list.getNode(index);
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
  return list;
}
let input = [1, 2, 3, 4, 5, 6];
let res = deleteAGivenNodeWhenANodeIsGiven(input, 3);
res.printList();
