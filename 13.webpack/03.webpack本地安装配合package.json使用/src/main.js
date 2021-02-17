//使用CommonsJS进行导入
const {sum,mul} = require('./js/mathUtils.js')
console.log(sum(20,30))
console.log(mul(20,30))

//使用ES6进行导入
import {name,age} from './js/info.js'
console.log(name+' and '+age)