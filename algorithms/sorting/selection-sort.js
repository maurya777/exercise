#!/usr/bin/env node

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
  console.log(
    selectionSort([5, 3, 1, 67, 3, 1, 4, 8, 5, 1, 6, 3, 2, 6, 8, 6, 2, 34, 1])
  );
}

module.exports = selectionSort;
