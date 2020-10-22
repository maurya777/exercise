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
    c = readLine().split(' ');
    c = c.map(Number);
    var pairs = c.reduce(function(prev, next){
        prev[next] = prev[next] ? prev[next] + 1 : 1;
        return prev;
    }, []).reduce(function(prev,next){
        return prev + parseInt(next/2)
    },0);
    console.log(pairs);
}
