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
    var n = parseInt(readLine());
    types = readLine().split(' ');
    types = types.map(Number);
    // your code goes here
    var s = [];
    s[0] = s[1] = s[2] = s[3] = s[4] = s[5] = 0;
    var res = types.reduce((acc, cur)=>{
        acc[cur]++;
        return acc;
    },s);
    console.log(res.indexOf(Math.max.apply(null, res)));
}
