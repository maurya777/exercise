process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var t = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);
    var balance = n;
    // your code goes here
    console.log(c.reduce((acc, cur, index)=>{
        balance = balance - cur;
        if (index < t-1) {
            if (balance < 5) {
                const addition = n - balance;
                balance = n;
                acc = acc + addition;
            }
        }
        return acc;
    }, 0));
}
