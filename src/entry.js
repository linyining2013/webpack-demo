// document.write('i am entry webpack')

// document.write(require('./module.js'))

// require('!style-loader!css-loader!./site.css')
// import和export必须写在顶级作用域中，否则会报错，因为是静态导入
// 动态导入：借用babel插件，解决代码按需加载,实现js懒加载
// function getComponent(){
//     return  import('jquery').then(()=>{

//     })
// }
// import moment from 'moment'
// //  手动引入语言包
// import 'moment/locale/zh-cn'
// //  设置语言
// moment.locale('zh-CN')
import Vue from 'vue/dist/vue.js'

new Vue({
    el: '#app',
    data() {
        return {
            msg: 'helloword'
        }
    }
})