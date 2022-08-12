var copyRandomList = function (head) {
  const references = new WeakMap();

  let node = head;

  while (node) {
    const node2 = new Node(node.val);
    references.set(node, node2);

    node = node.next;
  }

  node = head;
  const start = references.get(head);

  while (node) {
    const node2 = references.get(node);

    if (node.next) {
      node2.next = references.get(node.next);
    }

    if (node.random) {
      node2.random = references.get(node.random);
    }

    node = node.next;
  }

  return start;
};
