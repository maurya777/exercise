#!/usr/bin/env node
const assert = require('node:assert');

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      // console.count('comparison');
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    // console.log(arr);
    // console.count('swapping');
    const t = arr[i];
    arr[i] = arr[min];
    arr[min] = t;
  }
  return arr;
}

if (require?.main === module) {
  assert.deepEqual(selectionSort([]), []);
  assert.deepEqual(selectionSort([5]), [5]);
  assert.deepEqual(selectionSort([5, 3, 6, 1]), [1, 3, 5, 6]);
  console.log(
    selectionSort(
      Array(parseInt(Math.random() * 100, 10))
        .fill()
        .map((_) => parseInt(Math.random() * 100, 10))
    )
  );
}

module.exports = selectionSort;
