// Iterator: 为各种数据结构提供一个统一的、简便的访问接口
// 遍历器对象的本质是一个指针对象

// ES6中，数组、类数组、set和map结构原生具备Iterator接口，默认的Iterator接口部署在数据结构的Symbol.Iterator属性上。
// let arr = [1, 2, 3, 4, 4]
// arr = new Set(arr)
// let arrite = arr[Symbol.iterator]()
// console.log(arrite.next())
// console.log(arrite.next())
// console.log(arrite.next())
// console.log(arrite.next())
// console.log(arrite.next())

