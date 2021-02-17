// //导入方式1
// import {name,age,sum,Person} from './a-export.js'

// console.log(name)
// const person1 = new Person()
// console.log(person1.say())

// //导入方式2 文件导出的变量巨多，不适合用{}接受，并且还可以避免变量重名的问题
// //因为有了别名对象obj
// import * as obj from './a-export.js'
// const person2 = new obj.Person()
// console.log(obj.age)
// console.log(person2.say())
// console.log(obj.name)

import world from './a-export.js'
console.log(world())