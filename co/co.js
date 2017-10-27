function co(fn) {
  var it = fn();
  var result = null;
  function next(err, data) {
    result = it.next(data);
    if (!result.done) {
      result.value(next);
    }
  }

  next();
}
module.exports = co;