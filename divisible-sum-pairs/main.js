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
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    var skip = [],ret=0;
    for (var i=0;i<a.length;i++) {
        skip[i] = [];
        for (var j=0;j<a.length;j++) {
            if (i==j || (skip[j] && skip[j][i])) {
                continue;
            }
            if (!((a[i]+a[j])%k)) {
                skip[i][j] = true;
                ret++;
            }
        }
    }
    console.log(ret);
}
