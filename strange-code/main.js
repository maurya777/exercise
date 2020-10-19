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
function tVal(t){
    if (t===1) return 3;
    if (t===2) return 2;
    if (t===3) return 1;
    for (var c=3,v=3; c < t; v = v * 2, c = c + v) {
    }
    return c-t+1;
}

function main() {
    var t = parseInt(readLine());
    console.log(tVal(t));
}
