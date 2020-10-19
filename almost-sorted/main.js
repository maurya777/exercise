function isEqual(arr1,arr2) {
  return arr1.length === arr2.length && arr2.every(function (v, i) {return v === arr1[i];});
}

function isAlmostSorted(arr) {
  var sArr  = arr.slice().sort(function(a,b){return a-b;});
  var rArr  = sArr.slice().reverse();
  if (isEqual(arr, sArr)) {
    console.log('yes');
    return;
  }
  if (isEqual(arr, rArr)) {
    console.log('yes');
    if (arr.length > 3) {
      console.log('reverse %d %d', 1, arr.length);
    } else {
      console.log('swap %d %d', 1, arr.length);
    }
    return;
  }
  var i = 0, j = arr.length - 1;
  while (i < arr.length - 1 && arr[i] <= arr[i+1]) {
    i++;
  }
  while (j > i && arr[j] >= arr[j-1]) {
    j--;
  }
  var tmp = arr.slice(0,i).concat(arr[j],arr.slice(i+1,j), arr[i], arr.slice(j+1,arr.length));
  if (isEqual(tmp, sArr)) {
    console.log('yes');
    console.log('swap %d %d', i+1, j+1);
    return;
  }
  
  tmp = arr.slice(0,i).concat(arr.slice(i,j+1).reverse(), arr.slice(j+1,arr.length));
  if (isEqual(tmp, sArr)) {
    console.log('yes');
    console.log('reverse %d %d', i+1, j+1);
  } else {
    console.log('no');
  }
}

function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    var numbers = lines[1].split(' ').map(Number);
    isAlmostSorted(numbers);
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
