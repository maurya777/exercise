function processData(input) {
  //Enter your code here
  var lines = input.split('\n');
  lines.shift();
  lines.map(function(word){
      var out = word.split('').reduce(function(acc, c, i){
          acc[i%2].push(c);
          return acc;
      }, [[],[]]);
      console.log('%s %s', out[0].join(''), out[1].join(''));
  });
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
