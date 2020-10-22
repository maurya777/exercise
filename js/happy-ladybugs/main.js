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
function canAllBeHappy(b){
    const o = b.reduce((acc, next)=>{
        acc[next] = acc[next] ? acc[next] + 1 : 1;
        return acc;
    }, {});
    const single = Object.keys(o).filter(k=>k!=='_' && o[k]<2);
    if (single.length) {
        return 'NO';
    }
    const unhappy = b.reduce((acc,next,i)=>{
        return acc || ((b[i-1] && b[i-1] !== next) && (b[i+1] && next !== b[i+1]));
    },false);
    
    if (unhappy) {
        if (!o['_']) {
            return 'NO';
        } else {
            return 'YES';
        }
    } else {
        return 'YES';
    }
}
function main() {
    var Q = parseInt(readLine());
    for(var a0 = 0; a0 < Q; a0++){
        var n = parseInt(readLine());
        var b = readLine().split('');
        console.log(canAllBeHappy(b));
    }
}
