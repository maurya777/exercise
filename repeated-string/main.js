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
    var s = readLine();
    var n = parseInt(readLine());
    var As = (s.match(/a/g) || []).length;
    var repeats = parseInt(n/s.length);
    var remainders = (s.substr(0,n%s.length).match(/a/g) || []).length;
    console.log((As*repeats)+remainders);
}
