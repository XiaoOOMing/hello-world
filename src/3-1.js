// 解构
let [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

let [x, ...y] = [1, 2, 3, 4, 5];
console.log(x); // 1
console.log(y); // [2,3,4,5]

// 对象的解构 是按照key对应的
// let {foo: foo, bar: bar} = {foo: 'aaa', bar: 'bbb'};
let {foo, bar} = {foo: 'aaa', bar: 'bbb'};
console.log(foo); // aaa
console.log(bar); // bbb

// 如果key不对应 可以这样写
let {foo: baz} = {foo: 'aaa', bar: 'bbb'};
console.log(baz); // aaa

// 对于已赋值的变量进行解构，需要添加一个圆括号
let xz = 66;
({xz} = {xz: 888});
console.log(xz);

// 字符串的解构
let [a1, b1, c1, d1, e1] = 'hello';
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
console.log(e1);

// 计算字符串长度
let {length: len} = 'hello world';
console.log(len);

// 数值和布尔值的解构
let {toString: s} = 123;
console.log(s);

// 函数参数的解构赋值
console.log([[1, 2], [3, 4]].map(([a, b])=>a + b));

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + ' is ' + value);
}