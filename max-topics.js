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
    var m = parseInt(n_temp[1]);
    var topic = [];
    for(var topic_i = 0; topic_i < n; topic_i++){
       topic[topic_i] = parseInt(readLine(),2);
    }
    var mxc = 0, mx = 0;
    for (var i=0;i<topic.length;i++) {
        for(var j=i+1;j<topic.length;j++) {
            var c = topic[i] | topic[j];
            if (c < mx) {
                continue;
            } else if (c > mx) {
                mx = c;
                mxc = 1;
            } else {
                mxc++;
            }
        }
    }
    console.log(mx.toString(2).replace(/0/g,'').length);
    console.log(mxc);
}
