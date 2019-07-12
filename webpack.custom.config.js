const path = require('path')
// webpack的配置文件遵循commonjs规范 node运行环境 path是node的核心模块
module.exports = {
  entry: './src/main.js',
  output: {
    // path.resolve():解析当前的相对路径变为绝对路径
    // path:path.resolve('/dist/'),
    path: path.join(__dirname, './dist/'),
    filename: 'custombundle.js'
  },
  // 选择哪种模式打包 development开发模式则是不压缩 production生产模式代码是压缩混淆,而且消耗性能，开发阶段没必要选择
  mode: 'production'
}