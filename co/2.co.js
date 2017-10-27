let fs = require('fs');
let co = require('./co');
function read(filename) {
  return function (next) {
    fs.readFile(filename, 'utf8',next);
  }
}

co(function *() {
  let a = yield read('./1.txt');
  console.log(a);
  let b = yield read('./2.txt');
  console.log(b);
})

/*
function co(gen) {
  let it = gen();
  function next(err,data) {
    let result = it.next(data);
    if (!result.done) {
      result.value(next);
    }
  }
  next();
}*/
