/*
console.log(document.body.nodeName);
//拆分合并文本节点
//把两个文本节点创建并加载div标签里面再加入到body里面
 var a= document.createElement('div');
   var b= document.createTextNode ('hapi')

   var c= document.createTextNode('shiwo');
   
    a.appendChild(b);
    a.appendChild(c);
    a.normalize()

    var d=document.body.appendChild(a);


    //alert(d.childNodes.length);

    alert(d.firstChild);
//  ------------------------------------------错误  


//注释

   var p1 = document.getElementById('p1');

    var p11 = p1.childNodes[1].nodeValue


//    为什么children不能用

-------------------------------------------------------
var a=document.getElementById('p3');
var b =document.getElementById('id1');

contains(b,a)
    //传递参考节点(父节点)，和其他节点(子节点)
    function contains(refNode, otherNode) {
        //判断支持 contains，并且非 Safari 浏览器
        if (typeof refNode.contains != 'undefined' &&
            !(BrowserDetect.browser == 'Safari' && BrowserDetect.version < 3)) {
            return refNode.contains(otherNode);
            //判断支持 compareDocumentPosition 的浏览器，大于 16 就是包含
        } else if (typeof refNode.compareDocumentPosition == 'function') {
            return !!(refNode.compareDocumentPosition(otherNode) > 16);
        } else {
            //更低的浏览器兼容，通过递归一个个获取他的父节点是否存在
            var node = otherNode.parentNode;
            do {
                if (node === refNode) {
                    return true;
                } else {
                    node = node.parentNode;
                }
            } while (node != null);
        }
        return false;
    }


  var dv1 = document.getElementsByClassName('cl1');
    //alert(dv1.length);

    // dv1[0].innerHTML="<p>呵呵</p>"
    var ul = document.getElementsByTagName('ul');
    //alert(ul[0].children[0].innerHTML);
    //创建要添加的节点
    var text = document.createTextNode('kkkkkkkkkkk');
    var ele = document.createElement('jjjjjjjjjj');

    //获取到要添加位置的节点
    var w1 = ul[0].parentNode.appendChild(text);

    var w2 = ul[0].children[2].appendChild(text);
    ul[0].children[2].normalize
    ul[0].parentNode.appendChild(ele);

    var x =document.getElementById('h1id');
      //dv1[0].insertBefore(ele,dv1[0]);
      x.parentNode.insertBefore(ele,x);


//删除标签测试
    var div1=document.getElementById('h1id');
    var p =document.getElementsByTagName('p');
    div1.parentNode.removeChild(p[0]);




    var a= document.createElement('div');
    var b= document.createTextNode ('hapi')
 
    var c= document.createTextNode('shiwo');
    
     a.appendChild(b);
     a.appendChild(c);
     a.normalize()
 
     var d=document.body.appendChild(a);

     a.firstChild.splitText(4);

    //  alert(a.firstChild.nodeValue);
 
     var oDiv = document.getElementById("id1");
    // var oDiv = document.getElementsByClassName("cl1")[1];
     var oUl = oDiv.getElementsByTagName("ul")[0];
     var oLi = oUl.getElementsByTagName("li")[0];

     alert(oLi.firstChild.nodeValue);
        








*/





// window.onload = function () {
 
//     var oDiv1 = document.getElementById("id1");
//     oDiv1.innerHTML = "<a>123434556677677</a>";

// }



// var a =123;
// var b = a;
// b++;
// console.log( a+ " | " + b );    //123 | 124
// function box( n ){
//    n++;
//    console.log( a );//123
// }
// box(a);
// console.log( a );//123


// var oa = {name:123}
// var ob = oa;
// ob.name++
// console.log( oa);   //124
// console.log( ob );  //124


// function setName(obj){
//     obj.name = "apple";
// }
// var fruit = {};
// setName(fruit);
// console.log(fruit.name);    //apple   fruit对象被改变了


// function setName2(obj){
//     obj.name = "apple";
//     obj = {};
//     obj.name = "dog"  //这里的赋值,是对原fruit2 没有操作到的
// }
// var fruit2 = {};
// setName2(fruit2);
// console.log(fruit2.name);   



// function someFun (num, obj1, obj2) {
//     num *= 20;
//     obj1.name = "李四";
//     obj2 = 123;
// }
// let num = 10;
// let person1 = {name: "张三"};
// let person2 = {age: 24};
// someFun(num, person1, person2);
// console.log(num);  //10
// console.log(person1);   //{name: "李四"}
// console.log(person2);   //{age: 24}


var obj = new Object();
obj.name = "Nicholas";
obj = new Object();
obj.name = "Greg";

alert(obj.name);