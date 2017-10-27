var co = require('co');

function SimpleKoa() {
  this.middlewares = [];
}
SimpleKoa.prototype = {
  //注入个中间件
  use: function (gf) {
    this.middlewares.push(gf);
  },
  //执行中间件
  listen: function () {
    this._run();
  },
  _run: function () {
    var ctx = this;
    var middlewares = ctx.middlewares;
    return co(function *() {
      var i = middlewares.length;
      var prev = null;
      //从最后一个中间件到第一个中间件的顺序开始遍历
      while (i--) {
        //实际koa的ctx应该指向server的上下文，这里做了简化
        //prev 将前面一个中间件传递给当前中间件
        prev = middlewares[i].call(ctx, prev);
      }
      //执行第一个中间件
      yield prev;
    });
  }
};

module.exports = SimpleKoa;