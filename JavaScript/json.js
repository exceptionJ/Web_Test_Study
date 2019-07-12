// var arr = [{
//     name: 'aaa',
//     age: 88
// }, {
//     name: 'bbb',
//     age: 99
// }]

// var toJson =JSON.stringify(arr,['name'],4);
// alert(toJson);

// var box='[{"name":"ccc","age":12},{"name":"yyy","age":132}]';

// var arr2=JSON.parse(box);

// alert(arr2[0].name)

// function createXMLDOM() {
//     var version = [
//         'MSXML2.DOMDocument.6.0',
//         'MSXML2.DOMDocument.3.0',
//         'MSXML2.DOMDocument'
//     ];
//     for (var i = 0; i < version.length; i++) {
//         try {
//             var xmlDom = newActiveXObject(version[i]);
//             return xmlDom;
//         } catch (e) {
//             //跳过
//         }
//     }
//     throw new Error('您的系统或浏览器不支持 MSXML！'); //循环后抛出错误
// }
// //检测ie下的xml支持版本
// var xmlDom =createXMLDOM();
// alert(xmlDom);


// //首先，我们需要跨浏览器获取 XML DOM 传入一个字符串样式xml
// function getXMLDOM(xmlStr) {
//     var xmlDom = null;
//     if (typeof window.DOMParser != 'undefined') { //W3C
//         xmlDom = (new DOMParser()).parseFromString(xmlStr, 'text/xml');
//         var errors = xmlDom.getElementsByTagName('parsererror');
//         if (errors.length > 0) {
//             throw new Error('XML 解析错误：' + errors[0].firstChild.nodeValue);
//         }
//     } else if (typeof window.ActiveXObject != 'undefined') { //IE
//         var version = [
//             'MSXML2.DOMDocument.6.0',
//             'MSXML2.DOMDocument.3.0',
//             'MSXML2.DOMDocument'
//         ];
//         for (var i = 0; i < version.length; i++) {
//             try {
//                 xmlDom = newActiveXObject(version[i]);
//             } catch (e) {
//                 //跳过
//             }
//         }
//         xmlDom.loadXML(xmlStr);
//         if (xmlDom.parseError != 0) {
//             throw new Error('XML 解析错误：' + xmlDom.parseError.reason);
//         }
//     } else {
//         throw new Error('您所使用的系统或浏览器不支持 XML DOM！');
//     }
//     return xmlDom;
// }
// //其次，我们还必须跨浏览器序列化 XML
// function serializeXML(xmlDom) {
//     var xml = '';
//     if (typeof XMLSerializer != 'undefined') {
//         xml = (new XMLSerializer()).serializeToString(xmlDom);
//     } else if (typeof xmlDom.xml != 'undefined') {
//         xml = xmlDom.xml;
//     } else {
//         throw new Error('无法解析 XML！');
//     }
//     return xml;
// }

// // 测试
//var xmlStr = '<root><user>Lee</user></root>'
// // 获取xmldom对象
//var xmlDom=getXMLDOM(xmlStr);
// alert(xmlDom)
// // 取得xmldom的内容
// var xmlStrn000=serializeXML(xmlDom);
// alert(xmlStrn000);


//跨浏览器获取单一节点
// function selectSingleNode(xmlDom, xpath) {
//     var node = null;
//     if (typeof xmlDom.evaluate != 'undefined') {
//         var patten = /\[(\d+)\]/g;
//         var flag = xpath.match(patten);
//         var num = 0;
//         if (flag !== null) {
//             num = parseInt(RegExp.$1) + 1;
//             xpath = xpath.replace(patten, '[' + num + ']');
//         }
//         var result = xmlDom.evaluate(xpath, xmlDom, null,
//             XPathResult.FIRST_ORDERED_NODE_TYPE, null);
//         if (result !== null) {
//             node = result.singleNodeValue;
//         }
//     } else if (typeof xmlDom.selectSingleNode != 'undefined') {
//         node = xmlDom.selectSingleNode(xpath);
//     }
//     return node;
// }

// //跨浏览器获取节点集合
// function selectNodes(xmlDom, xpath) {
//     var nodes = [];
//     if (typeof xmlDom.evaluate != 'undefined') {
//         var patten = /\[(\d+)\]/g;
//         var flag = xpath.match(patten);
//         var num = 0;
//         if (flag !== null) {
//             num = parseInt(RegExp.$1) + 1;
//             xpath = xpath.replace(patten, '[' + num + ']');
//         }
//         var node = null;
//         var result = xmlDom.evaluate('root/user', xmlDom, null,
//             XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
//         if (result !== null) {
//             while ((node = result.iterateNext()) !== null) {
//                 nodes.push(node);
//             }
//         }
//     } else if (typeof xmlDom.selectNodes != 'undefined') {
//         nodes = xmlDom.selectNodes(xpath);
//     }
//     return nodes;
// }

//IE6的XMLHttpRequest对象实例化代码
// function createXHR() {
//     if (typeof XMLHttpRequest != 'undefined') {
//         return new XMLHttpRequest();
//     } else if (typeofActiveXObject != 'undefined') {
//         var versions = [
//             'MSXML2.XMLHttp.6.0',
//             'MSXML2.XMLHttp.3.0',
//             'MSXML2.XMLHttp'
//         ];
//         for (var i = 0; i < versions.length; i++) {
//             try {
//                 return newActiveXObject(version[i]);
//             } catch (e) {
//                 //跳过
//             }
//         }
//     } else {
//         throw new Error('您的浏览器不支持 XHR 对象！');
//     }
// }
// //实例化调用函数
// var xhr = new createXHR();
// alert(xhr);

function ajax(obj) {
    var xhr = new createXHR();
    obj.url = obj.url + '?rand=' + Math.random();
    obj.data = params(obj.data);
    if (obj.method === 'get') obj.url = obj.url.indexOf('?') == -1 ?
        obj.url + '?' + obj.data : obj.url + '&' + obj.data;
    if (obj.async === true) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) callback();
        };
    }
    xhr.open(obj.method, obj.url, obj.async);
    if (obj.method === 'post') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(obj.data);
    } else {
        xhr.send(null);
    }
    if (obj.async === false) {
        callback();
    }

    function callback() {
        if (xhr.status == 200) {
            obj.success(xhr.responseText); //回调
        } else {
            alert('数据返回失败！状态代码：' + xhr.status + '状态信息： ' + xhr.statusText);
        }
    }
}
//调用 ajax
// addEvent(document, 'click', function () { //IE6 需要重写 addEvent
//     ajax({
//         method: 'get',
//         url: 'demo.php',
//         data: {
//             'name': 'Lee',
//             'age': 100
//         },
//         success: function (text) {
//             alert(text);
//         },
//         async: true
//     });
// });
//名值对编码
function params(data) {
    var arr = [];
    for (var i in data) {
        arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
    }
    return arr.join('&');
}





ajaxRequest('get', 'http://127.0.0.1/json1.php','',function(){console.log("请求成功")},function(){console.log("请求失败")})




//封装ajax   适用于get post   并且可以提交数据或者不提交数据
//fnSucc函数、fnFaild函数 函数内操作的responseText内容如果是一个json，记得使用JSON.parse() 进行转换为原生js，好操作
function ajaxRequest(method, url, data, fnSucc, fnFaild) //method加引号  url加引号   data加引号(形式为name=123&age=20 这种形式)  如果没有data，写""作为参数
{
    //1.创建Ajax对象
    var oAjax = null;
    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject("microsoft.XMLHTTP");
    }

    if (method == "get" && data) {
        url += "?" + data + "&" + new Date().getTime();
    }
    if (method == "get" && !data) {
        url += "?" + new Date().getTime();
    }

    //2.连接服务器（打开和服务器的连接）
    oAjax.open(method, url, true); //以get方式请求，url请求地址，设置为异步方式true


    if (method == "get") {
        //3.发送请求
        oAjax.send();
    } else {
        oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //设置请求头，模拟表单post提交，告诉后端，我们是用什么格式编码的
        oAjax.send(data);
    }


    //4.接收返回
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState == 4) //浏览器和服务器进行到了哪一步   4表示读取完成，但是不一定结果是成功
        {
            if (oAjax.status == 200) //读取完成的结果  成功
            {
                //alert("成功:"+oAjax.responseText)；
                fnSucc(oAjax.responseText) //把responseText作为参数传进函数    如果要处理的数据是json，那么我们可以使用JS的JSON对象进行操作
            } else {
                //alert("失败");
                if (fnFaild) //第三个参数函数如果存在
                {
                    fnFaild(oAjax.status);
                    //可以传递一个状态进去，可以进一步设置fnFaild函数内当在什么status值时，执行什么函数
                }
            }
        };

    };
};