// let a = require('./a.js')
// ES6导入语法规范
import a from './a.js'
console.log('b模块');
console.log(a);
setTimeout(() => {
    console.log('一秒后执行了');
}, 1000);