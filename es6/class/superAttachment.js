function BankAccount(balance) {
  this.balance = balance
}

BankAccount.prototype.deposit = function (credit) {
  this.balance += credit
}

function CheckingAccount(balance) {
  // 以CheckingAccount的实例上下文调用BankAccount，保证CheckingAccount的实例也拥有
  // BankAccount的静态属性(balance)
  BankAccount.call(this, balance)
} 

// 原型继承，保证实例方法（deposit）的通用
CheckingAccount.prototype = BankAccount.prototype

// 修改CheckingAccount实例的构造函数为CheckingAccount，否则根据原型BankAccount.prototype为BankAccount
CheckingAccount.prototype.constructor = CheckingAccount

var a = new CheckingAccount(9)
a.deposit(6)
console.log(a.balance)
console.log(a.constructor)