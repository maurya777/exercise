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
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    if (x1 === x2 && v1 === v2) {
        console.log('YES');
        return;
    }
    if (x1 < x2 && v1 <= v2) {
        console.log('NO');
        return;
    }
    if (x1 > x2 && v1 >= v2) {
        console.log('NO');
        return;
    }
    var res = 'NO';
    if (x1 < x2) {
        var d = x2-x1;
        var l = v1-v2;
        res = d%l ? 'NO' : 'YES';
    } else if (x1 > x2) {
        var d = x1-x2;
        var l = v2-v1;
        res = d%l ? 'NO' : 'YES';
    }
    console.log(res);
}
