function processData(input) {
  //Enter your code here
  const lines = input.split('\n');
  lines.shift();
  const dict = {};
  lines.map(line=>{
      const [name, number] = line.split(' ');
      if (number) {
          dict[name] = number;
      } else if (dict[name]) {
          console.log('%s=%s', name, dict[name]);
      } else {
          console.log('Not found');
      }
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
