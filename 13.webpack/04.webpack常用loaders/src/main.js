//使用CommonsJS进行导入
const {sum,mul} = require('./js/mathUtils.js')
console.log(sum(20,30))
console.log(mul(20,30))

//使用ES6进行导入
import {name,age} from './js/info.js'
console.log(name+' and '+age)
//引用css文件
require('./css/normal.css')


//引入vue
import Vue from 'vue'
//引入组件
import App from './vue/App.vue'

new Vue({
  el : "#app",
  //对App组件进行注册
  components:{
    App
  },
  // 在index.html页面 id=‘app’替换该标签<app/>
  template : '<app></app>',
})