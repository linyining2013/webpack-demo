const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpckPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
// webpack的配置文件遵循commonjs规范 node运行环境 path是node的核心模块
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all'//所有的代码进行切割，导入，async只对异步加载的代码进行切割拆分
    },
    minSize: 30000, // 模块最少大于30KB才拆分
    maxSize: 0,  // 模块大小无上限，只要大于30KB都拆分,
    minChunks: 1, // 模块最少引用一次才会被拆分
    maxAsyncRequests: 5, // 异步加载时同时发送的请求数量最大不能超过5,超过5的部分不拆分
    maxInitialRequests: 3, // 页面初始化时同时发送的请求数量最大不能超过3,超过3的部分不拆分
    automaticNameDelimiter: '~', // 默认的连接符
    name: true, // 拆分的chunk名,设为true表示根据模块名和CacheGroup的key来自动生成,使用上面连接符连接
    cacheGroups: { // 缓存组配置,上面配置读取完成后进行拆分,如果需要把多个模块拆分到一个文件,就需要缓存,所以命名为缓存组

      vendors: { // 自定义缓存组名
        test: /[\\/]node_modules[\\/]/, // 检查node_modules目录,只要模块在该目录下就使用上面配置拆分到这个组
        priority: -10 // 权重-10,决定了哪个组优先匹配,例如node_modules下有个模块要拆分,同时满足vendors和default组,此时就会分到vendors组,因为-10 > -20
      },
      default: { // 默认缓存组名
        minChunks: 2, // 最少引用两次才会被拆分
        priority: -20, // 权重-20
        reuseExistingChunk: true // 如果主入口中引入了两个模块,其中一个正好也引用了后一个,就会直接复用,无需引用两次
      }
    }
  },
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
    new webpack.BannerPlugin('小林专属'),
    // 忽略国际化语言包 
    new webpack.IgnorePlugin(/\.\/locale$/, /moment$/)

  ],
  module: {
    noPares: /jquery|bootstrap/, //忽略没有依赖的第三方包
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
// DllPlugin  动态链接库  
