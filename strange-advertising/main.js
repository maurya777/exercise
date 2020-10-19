function processData(input) {
  //Enter your code here
  var n = parseInt(input);
  var res = 2, shares = 6;
  for (var i = 1; i < n; i++) {
      res += parseInt(shares/2);
      shares = parseInt(shares/2) * 3;
  }
  console.log(res);
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
