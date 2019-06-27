

//     var box = document.getElementById('box');
    // window.onload = function(){
//     //alert(box.tagName);//获取元素节点标签名
//     //alert(box.innerHTML);//获取元素节点标签下的文本
//     document.write(box.id +'\r\n');
//     document.write(box.className+'\r\n');
//     document.write(box.style.color+'\r\n');
//     document.write(box.title+'\r\n');            //获取元素属性值
// };

window.onload =function(){
    var i = document.getElementsByTagName('box');
    document.write(i.length[0]);
}