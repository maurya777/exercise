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
    var S = readLine();
    var n = S.match(/\S{3}/g).reduce(function(prev,next){
        if (next[0] !== 'S') {
            prev++;
        }
        if (next[1] !== 'O') {
            prev++;
        }
        if (next[2] !== 'S') {
            prev++;
        }
        return prev;
    },0);
    console.log(n);    
}
