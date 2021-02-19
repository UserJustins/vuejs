<template>
  <div>
    <h1> 执行命令：npm run build</h1>
    <h3>webpack是3.6.0,loader自然不能是最新的版本，使用如下版本就好</h3>
    <p>npm install css-loader@2.0.2 --save-dev</p>
    <p>npm install style-loader@0.23.1 --save-dev</p>
    <h1 class='message'>{{message}}</h1>
  </div>
</template>

<script>
  export default {
    name: "App",
    data(){
      return{
        message : "justin"
      }
    }
  }
</script>

<style scoped>
  .message{
    color : red
  }
</style>