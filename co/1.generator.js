//定义一个 generator 函数：
var gen_func = function* (){

}
//接下来我们要用到 yield关键字，用于停止执行和保存当前的堆栈。
var num = 1;
function * add(result){
  for(let i=0;i<3;i++){
    result += num;
    yield result;
  }
}
var sum = add(5);
console.log(sum.next());
console.log(sum.next());
console.log(sum.next());
console.log(sum.next());