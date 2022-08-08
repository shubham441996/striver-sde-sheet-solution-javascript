// Solution 1 using Map
var hasCycle = function (head) {
  let hash = new Map();
  let current = head;
  while (current) {
    if (hash.get(current)) {
      return true;
    } else {
      hash.set(current, 1);
    }
    current = current.next;
  }
  return false;
};

// Solution 2 Using two pointer
var hasCycle1 = function (head) {
  //let hash= new Map();
  let slow = head;
  if (slow && slow.next && slow.next.next) {
    let fast = head.next && head.next.next;
    while (fast) {
      if (fast == slow) {
        return true;
      }
      slow = slow.next;
      fast = fast.next && fast.next.next;
    }
    return false;
  } else {
    return false;
  }
};
