// let只在代码块中有效
{
    let a = 10;
    console.log(a); // 10
}

// console.log(a); // 报错

// let在for循环中有效
for (let i = 0; i < 10; i++) {
    // your code
}
// console.log(i); // 报错

// 当i为let时，输出6；当i为var时，输出10。
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i)
    }
}
a[6]();

// let不存在变量提升，变量声明之前使用会报错
console.log(foo);
var foo = 'abc'; // undefined

// console.log(bar);
// let bar = 'abc'; // 报错


// 暂时性死区，代码块中存在let声明的变量时，该变量不受外部影响。
var tmp = 123;
if (true) {
    // console.log(tmp);
    // let tmp = 123; // 报错
}

// 不允许重复声明
{
    // let re = 1;
    // let re = 1;
}

/*
function func(args) {
    {
        let args;
        console.log(args);
    }
}
func(123);*/

// 为什么需要块级作用域，由于变量提升导致结果为undefined
var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

f();

// let为es6创造了块级作用域
function f1() {
    let a = 10;
    {
        let a = 5;
    }
    console.log(a); // 10
}

f1();


// 块级作用域取代了匿名函数。
(function () {
    var tt = 123;
}());
// console.log(tt); // 报错

