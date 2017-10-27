var fs = require('fs');
let co = require('./co');
function read(file) {
  return function(fn){
    fs.readFile(file, 'utf8', fn);
  }
}
function *gf1(){
  this.a = yield read('error.js');
}
function *gf2(){
  this.b = yield read('package.json');
}
co(function*(){
  yield gf1;
  yield gf2;
  console.log(this.a.length);
  console.log(this.b.length);
})();