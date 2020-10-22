process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    var lines = input.split('\n');
    var n = lines[1].split(' ').reduce(function(prev, next, index){
        prev[index+1] = parseInt(next);
        return prev;
    },[]).map(function(v,k,arr){
        if (k) {
            console.log(arr.indexOf(arr.indexOf(k)));
        }
    });
});
