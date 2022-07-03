#!/usr/bin/env node
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
  console.log(
    mergeSort([5, 3, 1, 67, 3, 1, 4, 8, 5, 1, 6, 3, 2, 6, 8, 6, 2, 34, 1])
  );
}

module.exports = mergeSort;
