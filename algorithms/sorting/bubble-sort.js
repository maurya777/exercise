#!/usr/bin/env node
const { deepEqual } = require('node:assert');

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      // console.log(arr);
      // console.log('comparing');
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        const t = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = t;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

if (require?.main === module) {
  deepEqual(bubbleSort([]), []);
  deepEqual(bubbleSort([5]), [5]);
  deepEqual(bubbleSort([5, 3, 6, 1]), [1, 3, 5, 6]);
  console.log(
    bubbleSort(
      Array(parseInt(Math.random() * 100, 10))
        .fill()
        .map((_) => parseInt(Math.random() * 100, 10))
    )
  );
}

module.exports = bubbleSort;
