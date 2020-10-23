'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const n = parseInt(readLine(), 10);

  const genes = readLine().split(' ');

  const health = readLine().split(' ').map(healthTemp => parseInt(healthTemp, 10));

  const s = parseInt(readLine(), 10);

  let least = 0;
  let most = 0;

  for (let sItr = 0; sItr < s; sItr++) {
    const firstLastd = readLine().split(' ');

    const first = parseInt(firstLastd[0], 10);

    const last = parseInt(firstLastd[1], 10);

    const d = firstLastd[2];

    let h = 0;

    for (let i = first; i <= last; i++) {
      if (genes[i].length > 1) {
        const occurrences = findOccurrences(genes[i], d);
        if (occurrences > 0) {
          h += health[i] * occurrences;
        }
      } else {
        if (d.includes(genes[i])) h += health[i];
      }
    }

    if (least > h) least = h;
    if (most < h) most = h;
  }

  console.log(least, most)
}

function findOccurrences(charSet, str) {
  let occurrences = 0;
  let index = str.indexOf(charSet);
  let currIndex = index;
  while(index > -1) {
    occurrences++;
    index = str.indexOf(charSet, currIndex + 1)
    currIndex += index
  }
  return occurrences;
}