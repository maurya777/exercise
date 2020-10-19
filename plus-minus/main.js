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
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var res = arr.reduce(function(prev,next){
        if (next < 0) {
            prev[-1]++;
        } else if (next > 0) {
            prev[1]++;
        } else {
            prev[0]++;
        }
        return prev;
    }, {
        '-1':0,0:0,1:0
    });
    console.log(res[1]/n);
    console.log(res[-1]/n);
    console.log(res[0]/n);
}
