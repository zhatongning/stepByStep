var resolve, result

var readyPromise = new Promise((r) => { resolve = r})

resolve('the content I handle to resolve function')

readyPromise.then(() => a)


console.log(readyPromise)

console.log(result)

function a(b) {
  result = b
}
