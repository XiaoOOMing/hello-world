// codePointAt
var a = '𠮷';
console.log(a.length);

// 判断字符串是否存在/开头是否为什么/结尾是否为什么
var b = 'Hello World!';
console.log(b.includes('!'));
console.log(b.startsWith('Hello'));
console.log(b.endsWith('World!'));

// 重复字符串
var c = 'x';
console.log(c.repeat(5));

// 模板字符串
var [name, time] = ['bob', 'today'];
console.log(`Hello ${name}, how are you ${time}`);

// 调用函数
function f() {
    return 'Hello World';
}

console.log(`foo ${f()} bar`);

// 嵌套
const tpl = addres => `
    <table>
    ${addres.map(addr => `
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>
    `).join('')}
    </table>
`;
const data = [
    {first: '<Jane>', last: 'Bond'},
    {second: 'Lars', last: '<Croft>'}
];

console.log(tpl(data));
