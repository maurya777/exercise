#!/usr/bin/env node
const { equal, notEqual } = require('node:assert');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  head = null;
  tail = null;
  length = 0;

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    const node = this.tail;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) current = current.next;
      this.tail = current;
      current.next = null;
    }
    return node;
  }

  shift(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
    return this;
  }

  unshift() {
    if (this.length === 0) return null;
    const node = this.head;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return node;
  }

  get(index) {
    if (index < 0) return null;
    if (index >= this.length) return null;
    if (this.length === 0) return null;
    let node = this.head;
    let counter = 0;
    while (counter++ < index) node = node.next;
    return node;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert() {
    throw new Error('Not implemented');
  }
  remove() {
    throw new Error('Not implemented');
  }
  reverse() {
    throw new Error('Not implemented');
  }
}

if (require?.main === module) {
  const list = new SingleLinkedList();
  list.push('test1');
  equal(list.length, 1);
  equal(list.head, list.tail);
  equal(list.head.value, list.tail.value);
  equal(list.head.value, 'test1');

  list.push('test2');
  equal(list.length, 2);
  notEqual(list.head, list.tail);
  equal(list.head.value, 'test1');
  equal(list.tail.value, 'test2');

  let node = list.pop();
  equal(node.value, 'test2');
  equal(list.length, 1);
  equal(list.head, list.tail);
  equal(list.head.value, list.tail.value);
  equal(list.head.value, 'test1');

  node = list.pop();
  equal(node.value, 'test1');
  equal(list.length, 0);
  equal(list.head, list.tail);
  equal(list.head, null);

  list.shift('test3');
  equal(list.length, 1);
  equal(list.head, list.tail);
  equal(list.head.value, list.tail.value);
  equal(list.head.value, 'test3');

  list.shift('test4');
  equal(list.length, 2);
  notEqual(list.head, list.tail);
  equal(list.head.value, 'test4');
  equal(list.tail.value, 'test3');

  node = list.unshift();
  equal(node.value, 'test4');
  equal(list.length, 1);
  equal(list.head, list.tail);
  equal(list.head.value, list.tail.value);
  equal(list.head.value, 'test3');

  node = list.unshift();
  equal(node.value, 'test3');
  equal(list.length, 0);
  equal(list.head, list.tail);
  equal(list.head, null);

  list.push('test1');
  list.push('test2');
  list.push('test3');
  equal(list.get(0).value, 'test1');
  equal(list.get(1).value, 'test2');
  equal(list.get(2).value, 'test3');
  equal(list.get(-1), null);
  equal(list.get(5), null);
  list.pop();
  list.pop();
  list.pop();
  equal(list.get(0), null);

  list.push('test1');
  list.push('test2');
  equal(list.set(0, 'test11'), true);
  equal(list.get(0).value, 'test11');
  equal(list.set(1, 'test21'), true);
  equal(list.get(1).value, 'test21');
  equal(list.set(-1), false);
  equal(list.set(5), false);
  list.pop();
  list.pop();

  console.log(list);
}

module.exports = SingleLinkedList;
