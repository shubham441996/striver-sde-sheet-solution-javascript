class Node {
  constructor(val, next) {
    this.next = next;
    this.val = val;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(val) {
    let node = new Node(val);
    let lastNode = this.getLastNode();
    if (lastNode) {
      lastNode.next = node;
    } else {
      this.head = node;
    }
  }

  getLastNode() {
    let current = this.head;
    if (current) {
      while (current.next) {
        current = current.next;
      }
      return current;
    }
    return this.head;
  }

  arrayToList(arr) {
    let current = this.getLastNode();
    let start = current ? 0 : 1;
    if (!current) {
      let node = new Node(arr[0]);
      this.head = node;
      current = this.head;
    }

    for (let i = start; i < arr.length; i++) {
      let node = new Node(arr[i]);
      current.next = node;
      current = current.next;
    }
  }
  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += `${current.val}-->`;
      current = current.next;
    }
    console.log(str);
    return str;
  }
  printListByNode(node) {
    let current = node;
    let str = "";
    while (current) {
      str += `${current.val}-->`;
      current = current.next;
    }
    console.log(str);
    return str;
  }
  getNode(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (index === count) {
        return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }
    return null;
  }
  reverse() {
    let current = this.head;
    let prev = null;
    let next = current.next;

    while (current) {
      current.next = prev;
      prev = current;
      current = next;
      if (current) {
        next = current.next;
      } else {
        this.head = prev;
      }
    }
  }
}

module.exports = { LinkedList, Node };
