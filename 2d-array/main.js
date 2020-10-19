'use strict';

const fs = require('fs');

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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let maxHourGlass;
    for (let vIndex = 1; vIndex < 5; vIndex++) {
        for (let hIndex = 1; hIndex < 5; hIndex++) {
            const sum = arr[vIndex-1][hIndex-1] + arr[vIndex-1][hIndex] + arr[vIndex-1][hIndex+1] + arr[vIndex][hIndex] + arr[vIndex+1][hIndex-1] + arr[vIndex+1][hIndex] + arr[vIndex+1][hIndex+1];
            if (maxHourGlass === undefined || maxHourGlass < sum) {
                maxHourGlass = sum;
            }
        }
    }
    return maxHourGlass;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
