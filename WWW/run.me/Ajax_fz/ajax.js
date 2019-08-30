/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 16:18:46
 * @LastEditTime: 2019-08-30 17:19:17
 * @LastEditors: Please set LastEditors
 */
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
            alert('数据返回失败！状态代码：' + xhr.status + '，状态信息： ' + xhr.statusText);
        }
    }
}


//调用 ajax
addEvent(document, 'click', function () { //IE6 需要重写 addEvent
    ajax({
        method: 'get',
        url: 'demo.php',
        data: {
            'name': 'Lee',
            'age': 100
        },
        success: function (text) {
            alert(text);
        },
        async: true
    });
});
//名值对编码
function params(data) {
    var arr = [];
    for (var i in data) {
        arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
    }
    return arr.join('&');
}