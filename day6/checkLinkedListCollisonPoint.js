var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  let ptr = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      while (slow != ptr) {
        slow = slow.next;
        ptr = ptr.next;
      }
      return slow;
    }
  }
  return null;
};
