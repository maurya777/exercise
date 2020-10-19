function processData(input) {
  //Enter your code here
  var lines = input.split('\n');
  lines.shift();
  lines.map(function(v){
    v = v.split('');
    for (var i = v.length - 1; i>=0; i--) {
      var rhs = v.slice(i+1,v.length).sort();
      for (var j = 0; j < rhs.length; j++) {
        if (rhs[j] > v[i]) {
          var tmp = v[i];
          v[i] = rhs[j];
          rhs[j] = tmp;
          console.log(v.slice(0,i+1).join('') + rhs.join(''));
          return;
        }
      }
    }
    console.log('no answer');
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
