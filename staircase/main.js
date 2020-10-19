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
function padLeft(str, len, chr) {
    while(str.length < len) str = chr + str;
    return str;
}
function main() {
    var n = parseInt(readLine());
    var str = '';
    for(var i=0;i<n;i++){
        str += '#';
        console.log(padLeft(str, n, ' '));
    }    
}
