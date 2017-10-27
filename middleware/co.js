function co(fn) {
  return function (done) {
    let ctx = this;
    let gen = fn.call(ctx);
    let it = null;

    function _next(err, res) {
      if (err) res = err;
      it = gen.next(res);
      if (!it.done){
        if(isGeneratorFunction(it.value)){
          co(it.value).call(ctx,_next);
        }else{
          it.value(_next);
        }
      }else{
        done&&done();
      }

    }

    _next();
  }
}
module.exports = co;

//判断是否是 generator function
function isGeneratorFunction(obj) {
  var constructor = obj.constructor;
  if (!constructor) return false;
  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
  return isGenerator(constructor.prototype);
}
//判断是否是 generator 对象
function isGenerator(obj) {
  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
}