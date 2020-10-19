function processData(input) {
  //Enter your code here
  var lines = input.split('\n');
  var t = parseInt(lines.shift());
  for (var x = 0; x < t; x++) {
      var tmp = lines.shift().split(' ').map(Number);
      var n = tmp.shift(), m = tmp.shift(), s = tmp.shift();
      m = s + m-1
      if (m % n) {
          console.log(m%n);
      } else {
          console.log(n);
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
