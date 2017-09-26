function $(selector) {
    var res;
    switch (selector.substring(0, 1)) {
        case "#":
            var blank = selector.indexOf(" "); //空格符
            var dit = selector.indexOf("."); //点号符
            if (blank > 0 && dit > blank) {
                var idName = selector.substring(1, blank);
                var className = selector.substring(dit + 1);
                var node=document.getElementById(idName);
                var children=node.getElementsByTagName("*");
                for(var i=0;i<children.length;i++){
                    if(children[i].className=className){
                        res=children[i];
                        break;
                    }
                }
            } else {
                res = document.getElementById(selector.substring(1));
            }
            break;
        case ".":
            res = document.getElementsByClassName(selector.substring(1));
            break;
        case "[":
            var str = selector;
            var rp = str.indexOf("]"); //右侧方括号位置
            var ep = str.indexOf("="); //等号位置
            if (ep > 0) {
                var name = str.substring(1, ep);
                var srp = str.indexOf("'"); //右侧单引号位置
                var drp = str.indexOf('"'); //右侧双引号位置
                if (srp > 0) {
                    var value = str.substring(srp + 1, rp - 1);
                } else if (drp > 0) {
                    var value = str.substring(drp + 1, rp - 1);
                } else {
                    var value = str.substring(ep + 1, rp);
                }
                var tags = document.getElementsByTagName("*");
                for (var i = 0; i < tags.length; i++) {
                    if (tags[i].getAttribute(name) == value) {
                        res = tags[i];
                        break;
                    }
                }
            } else {
                var name = str.substring(1, rp);
                var tags = document.getElementsByTagName("*");
                for (var i = 0; i < tags.length; i++) {
                    if (tags[i].hasAttribute(name)) {
                        res = tags[i];
                        break;
                    }
                }
            }
            break;
        default:
            res = document.getElementsByTagName(selector);
            break;
    }
    return res;
}

function clickListener(event) {
    console.log(event);
}

function addEvent(element, event, listener) {
    // your implement
    element.addEventListener(event,listener,false);
}
addEvent($("#doma"), "click", clickListener);

// // 移除element对象对于event事件发生时执行listener的响应
// function removeEvent(element, event, listener) {
//     // your implement
//     element.removeEventListener(event,listener,false);
// }
// //removeEvent($("#doma"), "click", clickListener);

$.on = function(selector, event, listener) {
    // your implement
    var element = $(selector);
    addEvent(element, event, listener);
};

//点击事件绑定
$.click = function(selector, listener) {
    // your implement
    var element = $(selector);
    addEvent(element, "click", listener);
};

//移除事件绑定
$.un = function(selector, event, listener) {
    // your implement
    var element = $(selector);
    element.removeEventListener(event, listener, false);
};

function showEvent() {
    $("#list").innerHTML += '<li>new item</li>';
}

// function init() {
//     each($("#list").getElementsByTagName('li'), function(item) {
//         $.click(item, clickListener);
//     });

//     $.click($("#btn"), renderList);
// }
// init();


//事件绑定
function addClickEvent(element,listener){
    addEvent(element,'click',listener);
}

$.click = function(element,listener){
    addClickEvent(element,listener);
}

function delegateEvent(element,tag,eventName,listener){
    $.click(element,function(event){
        var target = event.target;
        if(target.nodeName.toLocaleLowerCase() == tag){
            listener(target);
        }
    });
}
$.delegate = delegateEvent;
$.delegate($("#list"),"li","click",clickListener);


function isIE() {
    // your implement
    var browserName = 'Microsoft Internet Explorer';
    if(navigator.appName = browserName){
        var userAgent = navigator.userAgent;
        var re = /MSIE (\d+\.\d+);/;
        re.test(userAgent);
        return parseFloat(RegExp['$1']);
    }else{
        return -1;
    }
}
console.log('是否为IE:'+isIE());