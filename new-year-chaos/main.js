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

// Complete the minimumBribes function below.
function minimumBribes(q) {
  let bribes = 0;
  for (let index = q.length-1; index >= 0; index--) {
    const bribe = q[index] - index - 1;
    if (bribe > 2) {
      console.log("Too chaotic");
      return;
    }
    for (let j = Math.max(0, q[index] - 2); j < index; j++) {
      if (q[j] > q[index])
        bribes++;
    }
  }
  console.log(bribes);
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
