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
    var time = readLine();
    var ampm = time.substr(8,2);
    time = time.substr(0,8);
    var hh = time.substr(0,2);
    if (ampm === 'PM') {
        hh = hh === '12' ? hh : parseInt(hh) + 12;
    } else {
        hh = hh === '12' ? '00' : hh;
    }
    time = '' + hh + ':' + time.substr(3);
    console.log(time);
}
