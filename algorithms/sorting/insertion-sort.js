#!/usr/bin/env node
const { deepEqual } = require('node:assert');

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      // console.count('swaps');
      const t = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = t;
      // console.log(arr);
    }
  }
  return arr;
}
if (require?.main === module) {
  deepEqual(insertionSort([]), []);
  deepEqual(insertionSort([5]), [5]);
  deepEqual(insertionSort([5, 3, 6, 1]), [1, 3, 5, 6]);

  console.log(
    insertionSort(
      Array(parseInt(Math.random() * 100, 10))
        .fill()
        .map((_) => parseInt(Math.random() * 100, 10))
    )
  );
}

module.exports = insertionSort;
