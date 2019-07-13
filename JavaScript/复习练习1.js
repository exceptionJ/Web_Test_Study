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
    
    function sum (x,y){
        return x*y
       
    }
    function sum2(a,b){
        return a+=b
    }

    var all=sum2.call(sum,2,5);

    alert(all);
}