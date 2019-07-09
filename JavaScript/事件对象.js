// 事件运行
// var div=document.getElementsByTagName('div')[0]
//     document.onmousedown = function (evt) {


//         if (getButton(evt) == 0) alert('左键');
//         if (getButton(evt) == 1) alert('中间');
//         if (getButton(evt) == 2) alert('右键');
//     };
// }
// //跨浏览器鼠标按钮
// function getButton(evttt) {
//     var evts = evttt || window.event;
//     if (evttt) {
//         return evts.button;
//     } else if (window.event) {
//         switch (evts.button) {
//             case 1:

//                 return 0;
//                 break;
//             case 4:

//                 return 1
//                 break;
//             case 2:

//                 return 2;
//                 break;
//             case 0:

//                 return 2;
//                 break;
//             default:
//                 break;
//         }
//     }


// var a = 1;

// console.log(a)  //1
// sum()  //a ==22
// console.log(a)  //22
// sum()   //43
// console.log(a)   //43
// sum()
// console.log(a)   //64


// function sum (){
//     return NaN
// }

// var a = sum();



// console.log(a)   //1
// var a=1;

//   var a=1;
//   xxx(98) ;
//   xxx(2) ;
//   console.log(a)
//   // a=a*4

//  function xxx(b){
//       a*=b

//  }

// var person={
//     age:20,
// }

// var person2={
//     age:30,
// }

// function add(p){
//     p.age++
// }

// add(person)
// console.log(person.age);
// add(person2)
// add(person2)
// add(person2)
// console.log(person2.age);

// var arr = [2, 2, 2];
// //var a=arr.length;

// for (var i = 0; i <arr.length;i++) {
//     arr[i] = arr[i]+1;
//     console.log(arr);
// }

// function add(a,b){
//     return a+b;
// }


// var sum= add(3,2)
// console.log(sum);

// var n= add(3,9)
// console.log(n);

// function agrs(){
//    return arguments.length
// };


// var n= args(1,6,8,9);

// var div1 = document.getElementsByTagName('div')[0];
// div1.onmousedown = function (x) {
//     //alert('111');//

//     // this.style.display='none';
//     if (isEve(x) == 0) {
//         return alert('左键');
//     } else if (isEve(x) == 1) {
//         return alert('中键');
//     } else if (isEve(x) == 2) {
//         return alert('右键');
//     } else {
//         return alert('错误');
//     }

// }

// function isEve(a) {
//     var e = a || window.event;
//     if (a) {
//         return e.button;
//     } else if (window.event) {
//         switch (e.button) {
//             case 1:
//                 return 0;
//                 break;
//             case 4:
//                 return 1;
//                 break;

//             case 2:
//                 return 2;
//                 break;


//             case 0:
//                 return 2;
//                 break;


//             default:
//                 break;
//         }
//     }
// }

// document.onclick = function (evts) {
//     //    alert('距离左边的值是'+evts.clientX+',距离上面的值是'+evts.clientY+ 
//     //    '距离左边屏幕的值是'+evts.screenX+',距离上面屏幕的值是'+evts.screenY); 

// }

//   3.修改键
//   有时，我们需要通过键盘上的某些键来配合鼠标来触发一些特殊的事件。这些键为：
//   Shfit、Ctrl、Alt 和 Meat(Windows 中就是 Windows 键，苹果机中是 Cmd 键)，它们经常被用
//   来修改鼠标事件和行为，所以叫修改键。
//   修改键属性
//   属性           说明
//   shiftKey   判断是否按下了 Shfit 键
//   ctrlKey    判断是否按下了 ctrlKey 键
//   altKey     判断是否按下了 alt 键
//   metaKey    判断是否按下了 windows 键，IE 不支持

// document.onclick = function (evts) {
//     //alert(evts.shiftKey);
//     //alert();
//     alert(isEveKey(evts));
// }

// function isEveKey(evt) {
//     var e = evt || window.event;
//     var keys = [];
//     if (e.shiftKey) keys.push("shift");
//     if (e.ctrlKey) keys.push('ctrl');
//     if (e.altKey) keys.push('alt');
//     return keys;
// }

// document.onkeydown = function (evts) {

//     var e = evts || window.event;

//     if ( e.keyCode == 13 &&  e.shiftKey) {
//         console.log("enter only") 
//     }

//     // alert( e.keyCode );
// }
window.onload = function () { 

    var button1 = document;
    button1.onclick = function (evt) {
        alert('docment');
        var e = evt|| window.event;
        alert(e.bubbles);
    }

    var button2 = document.body;
    button2.onclick = function () {
        alert('html');
    }

    var button3 = document.getElementsByTagName('div')[0];
    button3.onclick = function () {
        alert('div');
    }

    var button5 = document.getElementsByTagName('input')[0];
    button5.onclick = function (evt) {
        alert('input');
        var e = evt|| window.event;
        alert(e.bubbles);
        stopMaoPao(evt);
        alert(e.bubbles);
        //注意哪里不要冒泡，这里个方法就在哪里。记得参数evt传输
    }

   
  

}

function stopMaoPao(evt) {
    var e = evt|| window.event;
    window.event ? e.cancelBubble= true : e.stopPropagation();
}
