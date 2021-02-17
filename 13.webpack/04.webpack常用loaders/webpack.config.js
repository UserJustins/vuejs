module.exports = {
  entry: __dirname + "/src/main.js", 
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js",
      publicPath : "dist/"
  },
  module: {
    rules: [
      // 处理css的loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // 处理将图片资源转成 data url 进行处理
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 小于limit指定大小的图片，就使用url-loader，否则就要使用file-loader
              //如果大于或等于limit指定大小，则按照相应的文件名和路径打包图片；如果小于，则将图片转成base64格式的字符串。
              limit: 3000,
              name:'images/[name]-[hash:8].[ext]',
              //images:图片打包的文件夹；
              //[name]和[ext]：设定图片按照本来的文件名和扩展名打包，不用进行额外编码
              //[hash:8]：获取hash值的前八位作为图片名，可以避免重名。
            },
          },
        ],
      },
    ],
  },
}