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
    var v = [], a = 0, t;
    for(var a0 = 0; a0 < n; a0++){
        var x_i_temp = readLine().split(' ');
        var x_i = parseInt(x_i_temp[0]);
        var w_i = parseInt(x_i_temp[1]);
        t = x_i * w_i;
        a = a + t;
        v.push({
          x: x_i,
          w: w_i,
          v: t,
          a: a
        });
    }
    var avg = a/k, cb = v[0].x, c=0, nb = avg;
    k--;
    v.map(val => {
      if (val.a > nb) {
        cb = val.x;
        nb = nb + avg;
      }
      c = c + ((val.x - cb) * val.w);
      console.log(val, c);
    });
    console.log(c);
}
