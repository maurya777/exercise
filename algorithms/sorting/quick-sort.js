#!/usr/bin/env node
function swap(arr, from, to) {
  // if (from === to) return;
  console.log('Swapping', arr[from], from, arr[to], to);
  const tmp = arr[from];
  arr[from] = arr[to];
  arr[to] = tmp;
  return arr;
}

function pivotAtFirst(arr, left = 0, right = arr.length - 1) {
  let pv = arr[left];
  let largeValuesStartFrom = left;
  for (let index = left + 1; index <= right; index++) {
    if (pv > arr[index]) {
      largeValuesStartFrom++;
      swap(arr, index, largeValuesStartFrom);
    }
  }
  swap(arr, left, largeValuesStartFrom);
  return largeValuesStartFrom;
}

function pivotAtLast(arr, left = 0, right = arr.length - 1) {
  let pv = arr[right];
  let largeValuesStartFrom = right;
  for (let index = right - 1; index >= left; index--) {
    if (pv < arr[index]) {
      largeValuesStartFrom--;
      console.log(pv, 'is less than', arr[index]);
      swap(arr, index, largeValuesStartFrom);
    }
  }
  swap(arr, right, largeValuesStartFrom);
  return largeValuesStartFrom;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    console.log(arr);
    const p = pivotAtLast(arr, left, right);
    console.log('pivoting at', p, left, right);
    quickSort(arr, left, p - 1);
    quickSort(arr, p + 1, right);
  }
  return arr;
}

if (require?.main === module) {
  console.log(
    quickSort(
      Array(parseInt(Math.random() * 100, 10))
        .fill()
        .map((_) => parseInt(Math.random() * 100, 10))
    )
  );
}

module.exports = quickSort;
