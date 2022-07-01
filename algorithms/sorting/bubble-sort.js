#!/usr/bin/env node

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
  console.log(
    bubbleSort([5, 3, 1, 67, 3, 1, 4, 8, 5, 1, 6, 3, 2, 6, 8, 6, 2, 34, 1])
  );
}

module.exports = bubbleSort;
