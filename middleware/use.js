var fs = require('fs');
let co = require('./co');
//一个thunk函数
//问题1：为什么异步函数需要封装成 thunk 偏函数的形式？
function read(file) {
  return function(fn){
    fs.readFile(file, 'utf8', fn);
  }
}
//co 接受的 generator function 内部执行逻辑与co内部逻辑的执行顺序是什么样的？
co(function *(){
  var c = 2;
  console.log(c);
  //为什么 a 的值是 read() 异步返回的数据？
  var a = yield read('error.js');
  console.log(a);
  var b = yield read('package.json');
  console.log(b);
})();