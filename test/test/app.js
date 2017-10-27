var Koa = require('koa');
var app = new Koa();

app.use((ctx,next)=>{
  if(ctx.path == '/user'){
    ctx.response.set('Content-Type','application/json');
    ctx.body = JSON.stringify({name:'zfpx'});
  }else {
    ctx.body = 'hello';
  }

});

module.exports = app;