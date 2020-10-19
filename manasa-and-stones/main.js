function processData(input) {
    //Enter your code here
    const lines = input.split('\n').map(Number);
    const t = lines.shift();
    for(let i=0;i<t;i++){
        const n = lines.shift(), a = lines.shift(), b = lines.shift();
        const out = [];
        if (n === 1) {
            console.log([a,b].sort((a,b)=>a-b).join(' '));
        } else {
            for (let j=0;j<n;j++) {
                out.push((a * (n-j-1)) + (b * j));
            }
            console.log(out.reduce((acc, v)=>{
                    if (acc.indexOf(v) < 0) acc.push(v);
                    return acc;
                },[]).sort((a,b)=>a-b).join(' '));

        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
