
/**
 * node中有3中模块
 * 1) 内置模块：核心模块（不用通过相对路径引入，node提供）
 * 2) 文件模块：自己写的，通过相对路径引入
 * 3) 第三方模块：需要安装，使用和内置模块一样
 */
const fs = require('fs');

//读取文件：readFile(异步)  readFileSync(同步)
//读取文件时，如果文件不存在会报错
// let content = fs.readFileSync('./note1.md','utf8') //同步阻塞，是和读取小文件，模块化我们可以采用readFileSync来读取文件

let exisits = fs.existsSync('./note.md'); //此方法只用同步方法，异步方法不符合规范已经快被废弃了。
console.log('exisits',exisits);

//对文件的操作  一般不采用相对路径 ， 相对路径不明确
const path = require('path');

//__dirname 代表的是当前文件所在目录  是一个绝对路径，而且不可变
console.log('join',path.join(__dirname,'a','b','/')); // e:\扩展外置+自学\study\node\1、noded的基本概念\a\b
console.log('resolve',path.resolve(__dirname)); // E:\扩展外置+自学\study\node\1、noded的基本概念   , 根据执行的路径 解析出一个绝对路径 ，默认是可以变的 
//( 比如利用node执行，在study下执行 => node node/1、noded的基本概念/index.js，得到的E:\扩展外置+自学\study，但是退回到 扩展外置+自学)
//再 node study/node/1、noded的基本概念/index.js ,得到的是 E:\扩展外置+自学
//此情况目前只在mac上you区别。 window上的都是 E:\扩展外置+自学\study\node\1、noded的基本概念

// 注意：path.resolve 和 path.join 可以互相转换 ，但是path.resolve 遇到 / 会回到根路径

//path.extname('a.min.js') // ,js  获取后缀名
//path.dirname('a/b') // a   获取父路径 
let abc = 100;
// eval('console.log(abc);')

// let fn = new Function('console.log(abc);'); //生成一个顶级作用域的函数，所以拿不到index.js 里的abc 
// fn()

const vm = require('vm'); //node 中的模块
// let fn = vm.compileFunction('console.log(abc);') //类似于new Funtion()
// global.abc = 200;
// vm.runInThisContext('console.log(abc);') //用作沙箱

// console.log(arguments)
module.exports = {};

