// 这是webpack配置文件来打包vue全家桶的
const path = require('path')
const webpack = require('webpack')
// dllPlugin


module.exports = {
  mode: 'production',
  entry: {
    vue: [
      'vue/dist/vue.js',
      'vue-router'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_dll.js',
    // 将打包好的文件暴露在全局vue_dll
    library: '[name]_dll'
  },
  plugins: [
    // 指定路径 生成清单文件
    new webpack.DllPlugin({
      name: '[name]_dll',
      path: path.resolve(__dirname, '../dist/manifest.json')
    })
  ]
}

// // 这个webpack的配置文件就是用来打包vue全家桶的
// const path = require('path')
// // DllPlugin
// const webpack = require('webpack')
// module.exports = {
//   mode: 'production',
//   entry: {
//     vue: [
//       'vue/dist/vue.js',
//       'vue-router'
//     ]
//   },
//   output: {
//     path: path.resolve(__dirname, '../dist'),
//     filename: '[name]_dll.js',
//     library: '[name]_dll' // 最终会在全局暴露出一个vue_dll的对象
//   },
//   plugins: [
//     new webpack.DllPlugin({
//       name: '[name]_dll',
//       // 指定manifest.json的路径
//       path: path.resolve(__dirname, '../dist/manifest.json')
//     })
//   ]
// }