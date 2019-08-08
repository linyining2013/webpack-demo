const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpckPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
// webpack的配置文件遵循commonjs规范 node运行环境 path是node的核心模块
module.exports = {
  entry: './src/main.js',
  output: {
    // path.resolve():解析当前的相对路径变为绝对路径
    // path:path.resolve('/dist/'),
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // 选择哪种模式打包 development开发模式则是不压缩 production生产模式代码是压缩混淆,而且消耗性能，开发阶段没必要选择
  mode: 'development',
  // 开启服务器 打开新链接 开启热更新 压缩代码 端口号是3000
  devServer: {
    // open:true,
    hot: true,
    compress: true,
    port: 3000
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CleanWebpckPlugin(),
    new CopyWebpckPlugin([
      {
        from: path.join(__dirname, 'assets'),
        to: 'assets'
      }
    ]),
    new webpack.BannerPlugin('小林专属')

  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/
      },
      {
        test: /\.(html|htm)$/i,
        loader: 'html-withimg-loader'
      }
    ]
  },
  // source-map 源码映射
  devtool: 'cheap-module-eval-source-map'
  // babel是新一代JavaScript编译器
}
// 多应用打包 1.修改多入口，2.多入口无法对应一个固定的出口，所以修改filename为[name]变量3.如果用了html插件，需要手动配置多入口文件的html文件，将制定对应的输出文件
