//定义一些变量、函数、类（ES6中定义类就使用关键字class）
let name = "justin"
let age = 18

function sum (num1,num2){
  return num1 + num2
}

class Person{
  say(){
    console.log("hello world")
  }
}

//导出方式1
//export {name,age,sum,Person}

export default function(){
  return 'world'
}