4. 事件
4.1 任务描述
我们来继续用封装自己的小jQuery库来实现我们对于JavaScript事件的学习，还是在你的util.js，实现以下函数
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
}

// 例如：
function clicklistener(event) {
    ...
}
addEvent($("#doma"), "click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
}
接下来我们实现一些方便的事件方法
// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
}
接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法
addEvent(element, event, listener) -> $.on(element, event, listener);
removeEvent(element, event, listener) -> $.un(element, event, listener);
addClickEvent(element, listener) -> $.click(element, listener);
addEnterEvent(element, listener) -> $.enter(element, listener);
接下来考虑这样一个场景，我们需要对一个列表里所有的<li>增加点击事件的监听
最笨的方法
<ul id="list">
    <li id="item1">Simon</li>
    <li id="item2">Kenner</li>
    <li id="item3">Erik</li>
</ul>
function clickListener(event) {
    console.log(event);
}

$.click($("#item1"), clickListener);
$.click($("#item2"), clickListener);
$.click($("#item3"), clickListener);
上面这段代码要针对每一个item去绑定事件，这样显然是一件很麻烦的事情。
稍微好一些的
<ul id="list">
    <li>Simon</li>
    <li>Kenner</li>
    <li>Erik</li>
</ul>
我们试图改造一下
function clickListener(event) {
    console.log(event);
}

each($("#list").getElementsByTagName('li'), function(li) {
    addClickEvent(li, clickListener);
});
我们通过自己写的函数，取到id为list这个ul里面的所有li，然后通过遍历给他们绑定事件。这样我们就不需要一个一个去绑定了。但是看看以下代码：
<ul id="list">
    <li id="item1">Simon</li>
    <li id="item2">Kenner</li>
    <li id="item3">Erik</li>
</ul>
<button id="btn">Change</button>
function clickListener(event) {
    console.log(event);
}

function renderList() {
    $("#list").innerHTML = '<li>new item</li>';
}

function init() {
    each($("#list").getElementsByTagName('li'), function(item) {
        $.click(item, clickListener);
    });

    $.click($("#btn"), renderList);
}
init();
我们增加了一个按钮，当点击按钮时，改变list里面的项目，这个时候你再点击一下li，绑定事件不再生效了。那是不是我们每次改变了DOM结构或者内容后，都需要重新绑定事件呢？当然不会这么笨，接下来学习一下事件代理，然后实现下面新的方法：
// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    // your implement
}

$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
$.delegate($("#list"), "li", "click", clickHandle);
估计有同学已经开始吐槽了，函数里面一堆$看着晕啊，那么接下来把我们的事件函数做如下封装改变：
$.on(selector, event, listener) {
    // your implement
}

$.click(selector, listener) {
    // your implement
}

$.un(selector, event, listener) {
    // your implement
}

$.delegate(selector, tag, event, listener) {
    // your implement
}

// 使用示例：
$.click("[data-log]", logListener);
$.delegate('#list', "li", "click", liClicker);
4.2 期望达成
熟悉DOM事件相关知识
4.3 参考资料
W3School
慕课网 DOM事件
JavaScript事件代理
W3C
5. BOM
5.1 任务描述
实现以下函数
// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // your implement
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
}

// 获取cookie值
function getCookie(cookieName) {
    // your implement
}

5.2 期望达成
了解BOM的基础知识
5.3 参考资料
w3school
6. Ajax
6.1 任务描述
学习Ajax，并尝试自己封装一个Ajax方法。实现如下方法：
// 
function ajax(url, options) {
    // your implement
}

// 使用示例：
ajax(
    'http://localhost:8080/server/ajaxtest', 
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);
options是一个对象，里面可以包括的参数为：
type: post或者get，可以有一个默认值
data: 发送的数据，为一个键值对象或者为一个用&连接的赋值字符串
onsuccess: 成功时的调用函数
onfail: 失败时的调用函数
6.2 期望达成
掌握Ajax的实现方式
6.3 参考资料
w3school
Comet

