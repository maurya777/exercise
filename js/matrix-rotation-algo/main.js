function flatten(arr) {
  return arr.reduce((p,n,i)=>{
    if (i === 0) {
      p.r.h = p.r.h.concat(n);
    } else if (i === arr.length-1) {
      p.r.t = p.r.t.concat(n);
      //wrapup
      let tmp = p.m.length && p.m.every(v=>v.length) ? flatten(p.m) : [];
      p.r = p.r.h.concat(p.r.t.reverse());
      p = [p.r,...tmp];
    } else {
      p.r.h = p.r.h.concat(n[n.length-1]);
      p.r.t = p.r.t.concat(n[0]);
      p.m = [...p.m, n.slice(1,n.length-1)];
    }

    return p;
  }, {r:{h:[],t:[]},m:[]});
}

function rotate(matrix, r) {
  return matrix.map(arr=>{
    const offset = r % arr.length;
    return arr.slice().map((v,i)=>{
      const newIndex = (i + offset) >= arr.length ? i + offset - arr.length : i + offset;
      return arr[newIndex];
    });
  });
}

function wrapup(matrix, r, c, arr, iter){
  const row = matrix.shift();
  for (let i = 0; i < r; i++) {
    if (!arr[i]) arr[i] = [];
    for (let j = 0; j < c; j++) {
      if (i===0) {
        arr[i+iter][j+iter] = row.shift();
      } else if (i === r-1) {
        arr[i+iter][j+iter] = row.pop();
      } else if (j === 0) {
        arr[i+iter][j+iter] = row.pop();
      } else if (j === c-1) {
        arr[i+iter][j+iter] = row.shift();
      } else {
        arr[i+iter][j+iter] = -5;
      }
    }
  }
  if (matrix.length) {
    arr = wrapup(matrix, r-2, c-2, arr, iter + 1);
  }
  return arr;
}

function processData(input) {
  //Enter your code here
  const [[rows, cols, rotations], ...matrix] = input.split('\n').filter(v=>v).map(r=>r.split(' ').map(Number));
  console.log(wrapup(rotate(flatten(matrix), rotations), rows, cols, [],0).map(a=>a.join(' ')).join('\n'));

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
