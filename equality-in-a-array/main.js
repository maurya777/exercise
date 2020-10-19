function processData(input) {
  //Enter your code here
  var mx = 0, mxOccur, occurs=[], deletions = input.split('\n')[1].split(' ').map(Number).map(function(next){
      occurs[next] = occurs[next] ? occurs[next] + 1 : 1;
      if (mx < occurs[next]) {
        mx = occurs[next];
        mxOccur = next;  
      }
      return next;
  }).filter(function(n){
      return n !== mxOccur;
  }).length;
  console.log(deletions);
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
