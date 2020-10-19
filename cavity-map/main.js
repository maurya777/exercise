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
    var n = parseInt(readLine());
    var grid = [];
    for(var grid_i = 0; grid_i < n; grid_i++){
       grid[grid_i] = readLine().split('').map(Number);
    }
    if (n > 2) {
        for (let i=1;i<n-1;i++) {
            for (let j=1;j<n-1;j++) {
                const c = grid[i][j], u = grid[i-1][j], d = grid[i+1][j], l = grid[i][j-1], r = grid[i][j+1];
                if (c > Math.max(u,d,l,r)) {
                    grid[i][j] = 'X';
                }
            }    
        }
    }
    console.log(grid.map(g=>g.join('')).join('\n'));
}
