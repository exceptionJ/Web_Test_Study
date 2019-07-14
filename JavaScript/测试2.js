window.onload = function () {

    var div1 = document.getElementById('d1');

    var flag = false;
    var stop;
    var i = 1;
    var num = 0;

    div1.onclick = function () {

        flag = !flag;

        //alert(flag)
        if (flag) {
            // alert(flag);
            //flag = true;
            stop = setInterval(function () {
                // console.log(parseInt(getStyle(div1, "right")));
                if (parseInt(getStyle(div1, "right")) <= 0) {
                    // clearInterval(stop);
                    i = -1;
                    num += 1;


                } else if (parseInt(getStyle(div1, "left")) <= 0) {
                    i = 1;
                    num += 1;
                }
                right(i);
                if (num == 6) {
                    flag = !flag;
                    clearInterval(stop);
                    num = null;
                }

            }, 1);
        } else {
            // console.log(stop)
            clearInterval(stop);
        }

    }

    //left增加的方法
    function right(n) {
        var x = parseInt(getStyle(div1, "left"));
        var z = (x + 10 * n) + 'px'
        div1.style.left = z;
    }







    //函数返回值 是带单位的字符串，再给它parseInt(*) 一下，就可以进行计算了。
    function getStyle(obj, attr) { //attr参数记得加引号   
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, false)[attr];
        }
    }


}