//class的extend 的实现原来
// 由下面的typescript编译而来
// 对照superAttachment.js文件
// superAttachment.js中简单实现了extend方法，这里就是对其优化和封装

// { __proto__: [] } instanceof Array 确保浏览器支持__proto__

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (credit) {
        this.balance += credit;
        return this.balance;
    };
    return BankAccount;
}());
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);  // 类的继承
    function CheckingAccount(balance) {
        return _super.call(this, balance) || this;
    }
    CheckingAccount.prototype.writeCheck = function (debit) {
        this.balance -= debit;
    };
    return CheckingAccount;
}(BankAccount));


// typescript
class BankAccount {  
    constructor(public balance: number) {
    } 
    deposit(credit: number) {  
        this.balance += credit;  
        return this.balance;  
    }  
}  

class CheckingAccount extends BankAccount {  
    constructor(balance: number) {  
        super(balance);  
    }  
    writeCheck(debit: number) {  
        this.balance -= debit;  
    }  
}
