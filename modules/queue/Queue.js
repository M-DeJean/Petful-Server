class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node;
  }

  show() {
    // Return the next item in the queue.
    const node = this.first
    const next = node.next
    if (node === null) {
      return;
    }

    return node

  }

  all() {
    // Return all items in the queue.
    let node = this.first;
    let array = [];

    while (node) {
      array.push(node.value);
      node = node.next;
    }

    return array;

  }
}

module.exports = Queue
