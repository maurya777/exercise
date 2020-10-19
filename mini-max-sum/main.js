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
    var a_temp = readLine().split(' ').map(Number).sort(function(p,n){return p-n});
    console.log(a_temp.slice(0,a_temp.length - 1).reduce(function(p,n){return p+n}), a_temp.slice(1,a_temp.length).reduce(function(p,n){return p+n}));
}
