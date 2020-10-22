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
    var l = s.length;
    var root = Math.sqrt(l);
    var c = Math.ceil(root);
    var r = Math.floor(root);
        if ((c*r) < l) {
        if (c < r) {
            c++;
        } else {
            r++;
        }
    }
    var o = '';
    for (var i=0; i<c; i++) {
        for (var j=0; j<r; j++) {
            var x = (i)+(j*c);
            o += s[x] || '';
        }
        o += ' ';
    }
    o = o.substr(0,o.length-1);
    console.log(o);
}
