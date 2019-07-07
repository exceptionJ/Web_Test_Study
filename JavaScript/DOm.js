// window.onload = function () {
//     var doc = document.getElementById('list')
//     alert(doc.id);
//     alert(doc.style.color);
//     alert(doc.className);
//     alert(doc.title);
// }

// window.onload = function () {
//     var doc = document.getElementById('list')
//     alert(doc.tagName);//获取标签名
//     doc.innerHTML='加入的内容';
//     alert(doc.innerHTML);//获取这个标签里面的文本
// }

// window.onload =function () {
//     var tg=document.getElementsByTagName('*');

//    // alert(tg.length);
//     for(var i=0;i<=tg.length;i++){
//             tg[i]=i
//             alert(tg[i].tagName);
//     }

// }                


// window.onload = function () {
//     var box = document.getElementById('t01');
//      var zjd =box.childNodes;
//      // alert(zjd.length);
//     for(var i=0;i<=zjd.length;i++){
//     // alert(zjd[i]);
//       }
//     alert(zjd[0]);
//    alert(zjd[0].nodeType);
//    alert(zjd[0].nodeValue);
// }


// window.onload =function () {
//     var box=document.getElementById('list');
//     //alert(box.attributes[0]); //返回节点对象[object Attr]
//     alert(box.attributes[0].nodeName);
//     alert(box.attributes[0].nodeType);
//     alert(box.attributes[0].nodeValue);

//     alert(box.attributes[1].nodeName);
//     alert(box.attributes[1].nodeType);
//     alert(box.attributes[1].nodeValue);
// }


window.onload =function fn() {
    var box =document.getElementById('list');
    var tj =document.createElement('p');
    box.appendChild(tj);
    //var c=document.createTextNode('我是剃头猪')
     tj.appendChild(document.createTextNode('我是剃头猪'));
}