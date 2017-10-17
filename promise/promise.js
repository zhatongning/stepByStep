<<<<<<< HEAD
=======

var readyPromise = new Promise((resolve) => { resolve('the content I handle to resolve function') })
readyPromise.then((a) => console.log(a))

//

var resolve
var readyPromise = new Promise((r) => { resolve = r })
resolve('the content I handle to resolve function')
readyPromise.then((a) => console.log(a))

// 第二种写法乍一看不知道在干嘛
// 但实际上只是将promise的resolve方法用resolve变量提到实例所在的作用域，与第一种没有区别
>>>>>>> 4794523168250a521b2eb2482977b7f40df3d15f
