function isArr(arr) {
  return Array.prototype.isPrototypeOf(arr);
}
console.log(isArr(["1"]));



function isFunction(fn) {
  return typeof fn === "function";
}
console.log(isFunction(function a() {}));



function cloneObiect(src) {
    var result;
    switch (toString.call(src)) {
      case '[object String]':
        result = src;
        break;
      case '[object Number]':
        result = src;
        break;
      case '[object Array]':
        var temp = [];
        for (var i = 0; i < src.length; i++) {
          // temp[i] = src[i];
          temp[i] = cloneObiect(src[i]);
        }
        result = temp;
        break;
    }
    return result;
  }
  var test=[1,[2,3]];
  cloneObiect(test);



function isContain(arr, ele) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]==ele) {
      return true;
    } 
  }
}



function uniqArray(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    if (!isContain(temp, arr[i])) {
      temp[i] = arr[i];
      //temp.push(arr[i]);
    }
  }
  return temp;
}
var test =[1,3,5,7,3,5];
uniqArray(test);


function simpleTrim(str) {
    var head = 0,
        tail = str.length - 1;
    while (str[head] == " ") {
        head++;
    }
    while (str[tail] == " ") {
        tail--;
    }
    return str.substring(head, tail + 1);
}

function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
    // var exp=/^\s*(.+?)\s*$/g;
    // return exp.exec(str)[1];
}

function isEmail(emailStr){
// return str.replace(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/,"") ;
var str = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/;

if(str.test(emailStr)){
    return true;
}else{
    return fasle;
}
}
// var str = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/;
// var emailStr = "1@QQ.COM";
// console.log(str.test(emailStr));

function isPhone(phone){
    var str = /^1[34578]\d{9}$/; 
    
    if(str.test(emailStr)){
        return true;
    
            return true;
        }else{
            return fasle;
        }
    }

// var phoneStr = 15755332575;
// var str = /^1[34578]\d{9}$/; 
// console.log(str.test(phoneStr));



function each(arr, fn) {
    // your implement
    for(var i=0;i<arr.length;i++){
        fn(arr[i]);
    }
}




function addClass(element, newClassName) {
    var value = element.className;
        element.className = value + " " + newClassName;
}


function removeClass(element, oldClassName) {
   var value = element.className;
   var str = value.replace(oldClassName,"");
   element.className = str;
}


function isSiblingNode(element, siblingNode) {
    return element.parentNode===siblingNode.parentNode;
}

function getPosition(element) {
    return {
        x:element.offsetLeft,
        y:element.offsetTop
    };
}


// function $(selector) {
//     var res;
//     switch (selector.substring(0, 1)) {
//         case "#":
//             res = document.getElementById(selector.substring(1));
//             break;
//         case ".":
//             res = document.getElementsByClassName(selector.substring(1));
//             break;
//         case "[":
//             var reg1=/^\[(.+)\=(.+)\]$/g;
//             var reg2=/^\[(.+)\]$/g;
//             var tags=document.getElementsByTagName("*");
//             if(reg1.test(selector)){
//                 var name=reg1.exec(selector)[1];
//                 var value=reg1.exec(selector)[2];
//                 for(var i=0;i<tags.length;i++){
//                     if(tags[i].getAttribute(name)==value){
//                         res=tags[i];
//                         break;
//                     }
//                 }
//             }else if(reg2.test(selector)){
//                 var name=reg2.exec(selector)[1];
//                 for(var i=0;i<tags.length;i++){
//                     if(tags[i][name]){
//                         res=tags[i];
//                         break;
//                     }
//                 }
//             }
//             break;
//         default:
//             res = document.getElementsByTagName(selector);
//             break;
//     }
//     return res;
// }

function $(selector) {
    if (!typeof selector === "string") {
        return false;
    }

    //复合选择器

    //ID选择器
    if (/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/.test(selector)) {
        return document.getElementById(selector.slice(1, selector.length));
    }

    //tag选择器，只返回第一个
    if (/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/.test(selector)) {
        return document.getElementsByTagName(selector)[0];
    }

    /*
    class选择器，返回全部匹配项，复合选择器的实现需要匹配全部，所以只能暂时用这个
    */
    if (/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/.test(selector)) {
        if (document.getElementsByClassName) {
            return document.getElementsByClassName(
                selector.slice(1, selector.length)
            );
        }

        var nodes = document.all
            ? document.all
            : document.getElementsByTagName("*");
        var arr = []; //用来保存符合的className；
        for (var i = 0; i < nodes.length; i++) {
            if (hasClass(nodes[i], selector.slice(1, selector.length))) {
                arr.push(nodes[i]);
            }
        }
        return arr;
    }
    //属性选择器
    var reg_attr = /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/;
    if (reg_attr.test(selector)) {
        var dataname = reg_attr.exec(selector)[1];
        if (reg_attr.exec(selector)[5]) {
            var datavalue = reg_attr.exec(selector)[5];
        }
        var nodes = document.all
            ? document.all
            : document.getElementsByTagName("*");
        if (datavalue) {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].getAttribute(dataname) == datavalue) {
                    return nodes[i];
                }
            }
        } else {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].hasAttribute(dataname)) {
                    return nodes[i];
                }
            }
        }
    }
}


