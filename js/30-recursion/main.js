function factorial(n){
  if (n<2) return 1;
  return n * factorial(n-1);
}

function processData(input) {
  //Enter your code here
  console.log(factorial(parseInt(input)));
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
