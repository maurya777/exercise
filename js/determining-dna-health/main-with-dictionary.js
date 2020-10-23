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

  const geneHealth = genes.reduce((prev, next, i) => {
    const existing = prev[next]
    if (existing) {
      existing.h.push(health[i]);
      existing.i.push(i);
    } else {
      prev[next] = {h:[health[i]], i: [i] };
    }
    return prev;
  }, {})

  let least = 0;
  let most = 0;

  for (let sItr = 0; sItr < s; sItr++) {
    const firstLastd = readLine().split(' ');

    const first = parseInt(firstLastd[0], 10);

    const last = parseInt(firstLastd[1], 10);

    const d = firstLastd[2];

    let h = 0;

    for (let index = 1; index <= d.length; index++) {
      for (let idx = 0; idx + index <= d.length; idx++) {
        const str = d.substring(idx, idx + index)
        const gh = geneHealth[str];
        if(gh) {
          for (let i = 0; i < gh.h.length; i++) {
            if(gh.i[i] >= first && gh.i[i] <= last) h+=gh.h[i];
          }
        }
      }
    }

    if (least > h) least = h;
    if (most < h) most = h;
  }
  console.log(least, most)
}