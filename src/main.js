import Vue from 'vue/dist/vue.js'  //引入完整版vuejs 
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const homeComponent = {
    template: '<h2>我是home</h2>'
}
const newsComponent = {
    template: '<h2>我是news</h2>'
}
const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: homeComponent
        },
        {
            path: '/news',
            component: newsComponent
        }
    ]
})
new Vue({
    el: '#app',
    data() {
        return {
            msg: 'hhhh'
        }
    },
    router
})
// 动态导入的时候加入魔法注释，达到首页加载完后空闲时间就加载动态导入的资源了
// function getComponent() {
//     return import(/* webpackPrefetch: true */ 'jquery').then(({ default: $ }) => {
//         return $('<div></div>').html('我是main')
//     })
// }