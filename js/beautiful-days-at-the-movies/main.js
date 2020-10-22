function processData(input) {
  //Enter your code here
  var tmp = input.split(' ').map(Number);
  var i = tmp.shift(), j = tmp.shift(), k=tmp.shift(), ctr = 0;
  for (;i<j;i++) {
      var r = 1 * i.toString().split('').reverse().join('');
      var d = i - r;
      if (i === r) {
          ctr++;
      } else if (!(d%k)) {
          ctr++;
      }
  }
  console.log(ctr);
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
