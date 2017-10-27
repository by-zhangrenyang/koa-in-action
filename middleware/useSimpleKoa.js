let SimpleKoa = require('./SimpleKoa');
var app = new SimpleKoa();

app.use(function*(next){
  this.body = '1';
  yield next;
  this.body += '5';
  console.log(this.body);
});
app.use(function*(next){
  this.body += '2';
  yield next;
  this.body += '4';
});
app.use( function*(){
  this.body += '3';
});
app.listen();