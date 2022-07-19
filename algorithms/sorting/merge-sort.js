#!/usr/bin/env node

const { deepEqual } = require('node:assert');

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) result.push(right[j++]);
    else result.push(left[i++]);
  }
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);
  return result;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const half = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half)));
}

if (require?.main === module) {
  deepEqual(mergeSort([]), []);
  deepEqual(mergeSort([5]), [5]);
  deepEqual(mergeSort([5, 3, 6, 1]), [1, 3, 5, 6]);

  console.log(
    mergeSort(
      Array(parseInt(Math.random() * 100, 10))
        .fill()
        .map((_) => parseInt(Math.random() * 100, 10))
    )
  );
}

module.exports = mergeSort;
