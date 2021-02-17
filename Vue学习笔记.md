# webpack



#### 安装

Webpack可以使用npm安装，新建一个空的练习文件夹（此处命名为webpack sample project），在终端中转到该文件夹后执行下述指令就可以完成安装。

```
//全局安装
npm install -g webpack
//安装到你的项目目录
npm install --save-dev webpack
```

#### 正式使用Webpack前的准备

1. 在上述练习文件夹中创建一个package.json文件，这是一个标准的npm说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等等。在终端中使用`npm init`命令可以自动创建这个package.json文件

```
npm init
```

输入这个命令后，终端会问你一系列诸如项目名称，项目描述，作者等信息，不过不用担心，如果你不准备在npm中发布你的模块，这些问题的答案都不重要，回车默认即可。

1. package.json文件已经就绪，我们在本项目中安装Webpack作为依赖包

```
// 安装Webpack
npm install --save-dev webpack
```

1. 回到之前的空文件夹，并在里面创建两个文件夹,app文件夹和public文件夹，app文件夹用来存放原始数据和我们将写的JavaScript模块，public文件夹用来存放之后供浏览器读取的文件（包括使用webpack打包生成的js文件以及一个`index.html`文件）。接下来我们再创建三个文件:

- `index.html` --放在public文件夹中;
- `Greeter.js`-- 放在app文件夹中;
- `main.js`-- 放在app文件夹中;

此时项目结构如下图所示
![项目结构](https://segmentfault.com/img/remote/1460000007045086)

我们在**index.html**文件中写入最基础的html代码，它在这里目的在于引入打包后的js文件（这里我们先把之后打包后的js文件命名为`bundle.js`，之后我们还会详细讲述）。

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Webpack Sample Project</title>
  </head>
  <body>
    <div id='root'>
    </div>
    <script src="bundle.js"></script>
  </body>
</html>
```

我们在`Greeter.js`中定义一个返回包含问候信息的`html`元素的函数,并依据CommonJS规范导出这个函数为一个模块：

```
// Greeter.js
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!";
  return greet;
};
```

`main.js`文件中我们写入下述代码，用以把`Greeter模块`返回的节点插入页面。

```
//main.js 
const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());
```

#### 正式使用Webpack

webpack可以在终端中使用，在基本的使用方法如下：

```
# {extry file}出填写入口文件的路径，本文中就是上述main.js的路径，
# {destination for bundled file}处填写打包文件的存放路径
# 填写路径的时候不用添加{}
webpack {entry file} {destination for bundled file}
```

指定入口文件后，webpack将自动识别项目所依赖的其它文件，不过需要注意的是如果你的webpack不是全局安装的，那么当你在终端中使用此命令时，需要额外指定其在node_modules中的地址，继续上面的例子，在终端中输入如下命令

```
# webpack非全局安装的情况
node_modules/.bin/webpack app/main.js public/bundle.js
```

结果如下

![使用命令行打包](https://segmentfault.com/img/remote/1460000010637709)

可以看出`webpack`同时编译了`main.js` 和`Greeter,js`,现在打开`index.html`,可以看到如下结果
![htmlResult1](https://segmentfault.com/img/remote/1460000010637710)

有没有很激动，已经成功的使用`Webpack`打包了一个文件了。不过在终端中进行复杂的操作，其实是不太方便且容易出错的，接下来看看Webpack的另一种更常见的使用方法。