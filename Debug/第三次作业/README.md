## 1. 创建第一个页面交互

### 1.1 任务描述

*面向零基础学员*

在自己的Github中创建一个新的目录，比如`task0002`，在该目录下首先创建一个没有内容的页面： `task0002.html`，这个页面需要包含最基本的HTML结构，它将用于我们后面的任务。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>task0002</title>
</head>

<body>
</body>
</html>
```


使用刚刚创建好的`task0002.html`，在这个页面的`</body>`前增加这么一段代码

```javascript
<script>
alert("Hello World!");
</script>
```

刷新一下页面，DONE

好吧，这是我们很多年前才干的事情，现在更多时候是这样的

```javascript
<script>
console.log("Hello World!");
</script>
```

刷新一下页面，在Chrome中打开开发者工具，看看控制台里发生了什么。记住这个`console.log`，后续你会经常用着它。

接下来来点稍微复杂的，在你的`task0002.html`的`<body>`后增加下面的代码

```html
<input id="number1" type="text">
<input id="number2" type="text">
<span id="result"></span>
<button id="addbtn"></button>
```

同时，在`<script>`标签中做一下修改

```javascript
<script>
function $(id) {
    return document.getElementById(id);
}

function add(num1, num2) {
    return num1 + num2;
}

function renderResult(result) {
    $("result").innerHTML = result;
}

function addEventHandle() {
    var num1 = $("number1").value;
    var num2 = $("number2").value;
    var result = add(num1, num2);
    renderResult(result);
}

function initEvent() {
    $("addbtn").addEventListener("click", addEventHandle, false);
}

initEvent();
</script>
```

试试在Chrome下看看什么效果，再看看在IE8下什么效果。是不是有什么区别呢？先不着急寻找答案。

然后，试着建立一个新的`xxxx.js`的文件，把上面`<script>`里面的内容剪贴过去，在html中引入这个文件。

接下来的课程主要围绕JavaScript自身的一些基础知识，如果你对计算机编程本身还是不够熟悉，那就建议花比别人更多的时间多写点代码。

## 1.2 期望达成

- 了解JavaScript是什么
- 如何在HTML页面加载JavaScript代码
- 搜索一下，为什么我们让你把`<script>`放在`</body>`前。

## 1.3 参考资料

- [JavaScript 的性能优化：加载和执行](http://www.ibm.com/developerworks/cn/web/1308_caiys_jsload/index.html)

## 2. JavaScript数据类型及语言基础

### 2.1 任务描述

- 创建一个JavaScript文件，比如`util.js`；
- 实践判断各种数据类型的方法，并在`util.js`中实现以下方法：

```javascript
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // your implement
}
```

- 了解值类型和引用类型的区别，了解各种对象的读取、遍历方式，并在`util.js`中实现以下方法：

```javascript
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    // your implement
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"
```

- 学习数组、字符串、数字等相关方法，在`util.js`中实现以下函数

```javascript
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // your implement
}

// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    // your implement
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
}

// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3

```

- 学习正则表达式，在`util.js`完成以下代码

```
// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
}
```

### 2.2 期望达成

- 掌握JavaScript的各种数据类型概念、判断方法
- 掌握JavaScript函数、对象的概念
- 掌握字符串、数字、数组、日期等对象的方法
- 了解JavaScript的作用域
- 初步掌握正则表达式的写法

### 2.3 参考资料

- [JavaScript 数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
- [MDN Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN 正则](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## 3. DOM

### 3.1 任务描述

先来一些简单的，在你的`util.js`中完成以下任务：

```javascript
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
}
// your implement
```

接下来挑战一个`mini $`，它和之前的`$`是不兼容的，它应该是`document.querySelector`的功能子集，在不直接使用`document.querySelector`的情况下，在你的`util.js`中完成以下任务：

```javascript
// 实现一个简单的Query
function $(selector) {
    
}

// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象
```

### 3.2 期望达成

- 非常熟练掌握DOM的相关操作

### 3.3 参考资料

- [DOM](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/JavaScript_technologies_overview)
- [MDN QuerySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN QuerySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)