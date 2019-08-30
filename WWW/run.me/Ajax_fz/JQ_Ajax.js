/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 17:21:29
 * @LastEditTime: 2019-08-30 21:20:43
 * @LastEditors: Please set LastEditors
 */
$.ajax({
    url: 'json.php',
    type: 'get',
    // 设置的是请求参数
    data: {
        id: 1,
        name: '张三'
    },
    // 用于设置响应体的类型 注意 跟 data 参数没关系！！！
    dataType: 'json',
    success: function (res) {
        // 一旦设置的 dataType 选项，就不再关心 服务端 响应的 Content-Type 了
        // 客户端会主观认为服务端返回的就是 JSON 格式的字符串
        console.log(res)
    }
})


$.ajax({
    url: 'time.php',
    type: 'get',
    beforeSend: function (xhr) {
        // 在所有发送请求的操作（open, send）之前执行
        console.log('beforeSend', xhr)
    },
    success: function (res) {
        // 隐藏 loading
        // 只有请求成功（状态码为200）才会执行这个函数
        console.log(res)
    },
    error: function (xhr) {
        // 隐藏 loading
        // 只有请求不正常（状态码不为200）才会执行
        console.log('error', xhr)
    },
    complete: function (xhr) {
        // 不管是成功还是失败都是完成，都会执行这个 complete 函数
        console.log('complete', xhr)
    }
})

实际开发中用的最多的就是这种模式
// $.get('json.php', { id: 1 }, function (res) {
//   console.log(res)
// })

// $.post('json.php', { id: 1 }, function (res) {
//   console.log(res)
// })

// $.getJSON('json.php', { id: 1 }, function (res) {
//   console.log(res)
// })


// 明确请求的方式 根据方式选择快捷方法