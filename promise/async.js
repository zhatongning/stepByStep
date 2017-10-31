// ES7
// async函数是Generator的语法糖

function timeout (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}


// async关键字表明该函数内部有一步操作
// 调用该函数时，会立即返回一个promise对象
async function asyncPrint (value, ms) {
  await timeout(ms)
  console.log(value)
  return '这是返回的promise对象需要处理的值'
}

var printPromise = asyncPrint('HELLO WORLD', 1000) // 1000ms后输出'HELLO WORLD'
console.log(printPromise) // 立即返回: Promise { <pending> }
printPromise.then((msg) => {
    console.log(msg) //这是返回的promise对象需要处理的值
  })

// timeout(1000)
//   .then(() => {
//     console.log('执行了')
//   })