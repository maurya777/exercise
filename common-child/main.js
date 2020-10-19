function lcs(line1, line2) {
  var LCSes = [],i=0,j=0,m=line1.length + 1,n=line2.length+1;
  for (; i < m; i++) {
      LCSes[i] = [];
      for (j=0; j < n; j++) {
          if (i===0 || j===0) {
              LCSes[i][j] = 0;
          } else if (line1[i-1] === line2[j-1]) {
              LCSes[i][j] = LCSes[i-1][j-1] + 1;
          } else {
              LCSes[i][j] = Math.max(LCSes[i-1][j], LCSes[i][j-1]);
          }
      }
  }
  return LCSes[line1.length][line2.length];
}

function processData(input) {
  //Enter your code here
  var lines = input.split('\n'),line1=lines[0],line2=lines[1];
  console.log(lcs(line1,line2));
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
