// window.onload = function(){
//     var oUl = document.getElementById("ul1");
//     var aLi = oUl.getElementsByTagName('li');
//     for(var i=0;i<aLi.length;i++){
//         aLi[i].onclick = function(){
//             alert(123);
//         }
//     }

// }

// window.onload = function() {
//   var oUl = document.getElementById("ul1");
//   oUl.onclick = function(ev) {
//     var ev = ev || window.event; //兼容性
//     var target = ev.target || ev.srcElement; //兼容性
//     if (target.nodeName.toLowerCase() == "li") {
//       console.log("hello world!");
//       alert(target.innerHTML);
//       target.style.background = "red";
//     }
//   };
// };

// window.onload = function(){
//    var lab = document.getElementById("doma");
//    lab.onclick = function(){
//        console.log("this a fasle");
//    }
// }

// window.onload = function(){
//     var add = document.getElementById("add");
//     var remove = document.getElementById("remove");
//     var move = document.getElementById("move");
//     var select = document.getElementById("select");

//     add.onclick = function(){
//         alert("增加");
//     }
// }

// window.onload = function(){
//     var box = document.getElementById("box");
//     box.onclick = function(ev){
//         var ev = ev || window.event;
//         var target = ev.target || ev.srcElement;
//         if(target.nodeName.toLocaleLowerCase() == 'input'){
//             switch(target.id){
//                case 'add':
//                alert('添加');
//                break;
//                case 'remove':
//                alert('删除');
//                break;
//                case 'move':
//                  break;
//              alert('移动');
//                break;
//                case 'select':
//                alert('选择');
//             }
//         }
//     }
// }

// window.onload = function(){
//     var btn = document.getElementById("btn"); 
//     var ul = document.getElementById("ul1");
//     var li = document.getElementsByTagName("li");
//     var num =4;
//     function mHover(){
//     for(var i=0;i<li.length;i++){
//         li[i].onmouseover = function(){
//            this.style.background = 'red';
//         }
//         li[i].onmouseleave = function(){
//             this.style.background = '#fff';
//         }
//     }
// }
//     mHover ();
//     btn.onclick = function(){
//         num++;
//        var oLi = document.createElement('li');
//        oLi.innerHTML = 111*num;
//         ul.appendChild(oLi);
//         mHover ();
//     };
// }


window.onload = function(){
    var btn = document.getElementById("btn"); 
    var ul = document.getElementById("ul1");
    var li = document.getElementsByTagName("li");
    var num =4;
    
        ul.onmousemove =function(ev){
            var ev = ev || window.ev;
            var target = ev.target || ev.srcElement;
            if(target.nodeName.toLocaleLowerCase() == 'li'){
                target.style.background = "red";
            }
        };

        ul.onmouseout = function(ev){
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            if(target.nodeName.toLowerCase() == 'li'){
                target.style.background = "#fff";
            } 
        };
    btn.onclick = function(){
        num++;
       var oLi = document.createElement('li');
       oLi.innerHTML = 111*num;
        ul.appendChild(oLi);
    };
}

