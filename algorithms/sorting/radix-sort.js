#!/usr/bin/env node
const assert = require('node:assert');

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / 10 ** place) % 10;
}

function radixSort(arr, place = 0) {
  // const acc = [];
  // if (!arr.length) return arr;
  // for (let i = 0; i < arr.length; i++) {
  //   const digit = getDigit(arr[i], place);
  //   acc[digit] = acc[digit] || [];
  //   acc[digit].push(arr[i]);
  // }
  // return acc.length === 1 ? acc[0] : radixSort([].concat(...acc), place + 1);
  if (!arr.length) return arr;
  const acc = arr.reduce((acc, num) => {
    const digit = getDigit(num, place);
    acc[digit] = acc[digit] || [];
    acc[digit].push(num);
    return acc;
  }, []);
  return acc.length === 1 ? acc[0] : radixSort([].concat(...acc), place + 1);
}

if (require?.main === module) {
  assert.deepEqual(radixSort([]), []);
  assert.deepEqual(radixSort([5]), [5]);
  assert.deepEqual(radixSort([5, 3, 6, 1]), [1, 3, 5, 6]);
  console.log(
    radixSort(
      Array(parseInt(Math.random() * 100, 10))
        .fill()
        .map((_) => parseInt(Math.random() * 100, 10))
    )
  );
}

module.exports = radixSort;
