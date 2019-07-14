// var str = 'abcde'
// console.log(str[1]);
window.onload = function () {
    var rbt = document.getElementsByClassName('riqi')[0];
    rbt.onclick = function () {
        var day = new Date().getDay();
        alert(day);
        switch (day) {
            case 1:
                alert('今天星期一')
                break;
            case 1:
                alert('今天星期一')
                break;
            case 2:
                alert('今天星期2')
                break;
            case 3:
                alert('今天星期3')
                break;
            case 4:
                alert('今天星期4')
                break;
            case 5:
                alert('今天星期5')
                break;
            case 6:
                alert('今天星期6')
                break;
            case 7:
                alert('今天星期7')
                break;
            default:
                break;
        }
    }

    var xh = document.getElementById('xh');
    xh.onclick = function () {
        var i;
        var arr = '';
        var xhArr = {
            a: 13,
            b: 21,
            c: 12,
            d: 3,
            e: 325,
            f: '放',
            g: 43,
            e: '2的',
            h: 25,
            x: 2,
            y: 324
        };
        for (i in xhArr) {
            arr = arr + '<' + xhArr[i] + '>---' + typeof arr + '----------';
        }
        document.getElementById('sc').innerHTML = arr;
    }

    //   var arrcs1 =[1,2,3,4];
    //   console.log(arrcs1.constructor);  

    //console.log(new Date().toLocaleTimeString());

    // try {
    //     alaeert('这是ige抛出异常的错误');
    // } catch (error) {
    //     var tet;
    //     tet = '上面可能有个错误\n\n' + '错误描述:' + error.message + '\n\n' + '请点击确定继续';
    //     alert(tet);

    // }finally{
    //     console.log(new Date());
    // }

    //const con =5;

    //     function sum (x,y){
    //         return x*y

    //     }
    //     function sum2(a,b){
    //         return a+=b
    //     }

    //     var all=sum2.call(sum,2,5);

    //     alert(all);


    // function outerFunction() {
    //     var counter = 0;

    //     function innerFunction() {
    //         return counter += 1;
    //     }
    //     return innerFunction;
    //     /*
    //      注意 typeof innerFunction 是：function；而typeof innerFunction（）是number；
    //     */
    // }
    // var add = outerFunction();

    // /* 
    // 调用 outerFunction()返回的是内部函数innerFucntion,那么调用几次add()将调用几次
    // 内部函数inner Function，内部函数公用了counter，所以能够计数,所以说闭包就是将内部嵌套函数变成外部可调用的。
    // */

    // alert(add());
    // alert(add());alert(add());alert(add());alert(add());

    // //改写为简单闭包样子;
    // var outer = (function () {
    //     var count = 0;
    //     return function () {
    //         return count += 1;
    //     }

    // })();

    // for(var i=0;i<10;i++){
    //     alert(outer());
    // }
    var ppdiv = document.getElementById('sc3');
    var pp = ppdiv.getElementsByTagName('p')[0];

    pp.onclick = function () {
        pp.innerHTML = time();
        pp.style.backgroundColor = 'red'

    }

    function time() {
        return new Date();
    }


    var div1 = document.getElementsByClassName('sc001')[0];
    var a = div1.onmouseover = function () {
        div1.innerHTML = '百变小可爱';
    }
    div1.onmouseout = function () {
        div1.innerHTML = 'hhehh'

    }
//定时器显示时间
    // var myVar = setInterval(myTimer, 1000);

    // function myTimer() {
    //     var d = new Date();
    //     var t = d.toLocaleTimeString();
    //     document.getElementById("demo").innerHTML = t;
    // }

    // function myStopFunction() {
    //     alert('111');
    //     clearInterval(myVar);
    // }



    // function setInterval(a,b){
    //     b 秒后 我就执行一次   a()
    // }
//问题2

// function Sum (){
//     this.z = 18
// }

// var box = new Sum();  //{ z :18 }

// function sum2(){
//     return this.z
// }

// var all=sum2.call(box);

//alert(all); //18






}