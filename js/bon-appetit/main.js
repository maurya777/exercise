function processData(input) {
  //Enter your code here
  var lines = input.split('\n');
  var n_k = lines[0].split(' ').map(Number);
  var n = n_k[0], k = n_k[1];
  var items = lines[1].split(' ').map(Number);
  var b = parseInt(lines[2]);
  var actual = items.reduce(function (prev, next, index) {
      return index === k ? prev : prev + next;
  }, 0) / 2;
  if (actual === b) {
      console.log('Bon Appetit');
  } else {
      console.log(b - actual);
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
