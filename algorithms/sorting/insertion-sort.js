#!/usr/bin/env node

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
  console.log(
    insertionSort([5, 3, 1, 67, 3, 1, 4, 8, 5, 1, 6, 3, 2, 6, 8, 6, 2, 34, 1])
  );
}

module.exports = insertionSort;
