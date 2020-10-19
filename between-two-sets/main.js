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
function isFactoredByAll(i, arr) {
    return !arr.filter(function(n){
        return i%n;
    }).length;
}
function canFactorAll(i, arr) {
    return !arr.filter(function(n){
        return n%i;
    }).length;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    a = a.sort(function(x,y){return x-y;});
    b = b.sort(function(x,y){return x-y;});
    var mn = a[a.length-1], mx=b[0], ctr=0;
    for (var i = mn; i <= mx; i++) {
        if (isFactoredByAll(i,a) && canFactorAll(i,b)) {
            ctr++;
        }
    }
    console.log(ctr);
}
