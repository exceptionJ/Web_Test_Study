/*
 * @Description: 
 * @Author: your name
 * @Date: j
 * @LastEditTime: 
 * @LastEditors: Please set LastEditors
 */
$(document).ready(function () {

    // 显示时钟格式化并加入到桌面操作
    function getDates(dt) {
        var str = ""; //存储时间的字符串
        //获取年
        var year = dt.getFullYear();
        //获取月
        var month = dt.getMonth() + 1;
        //获取日
        var day = dt.getDate();
        //获取小时
        var hour = dt.getHours();
        //获取分钟
        var min = dt.getMinutes();
        //获取秒
        var sec = dt.getSeconds();
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        str = year + "年" + month + "月" + day + "日 " + hour + ":" + min + ":" + sec;
        return str;
    }
    var nowTime = getDates(new Date());
    $('.clock').text(nowTime);
    setInterval(function () {
        var nowTime = getDates(new Date());
        $('.clock').text(nowTime);
    }, 1000);



    //时钟拖拽操作调用
    var clock = document.getElementsByClassName('clock')[0];
    drag(clock);

    for (var i = 0; i < clock.length; i++) {
        drag(clock[i]);
    }

    //拖拽封装方法
    function drag(obj) {
        // 添加按下事件
        obj.onmousedown = function (e) {
            e = e || event;
            // 标准下取消默认行为
            if (e.preventDefault) {
                e.preventDefault();
            }
            // ie浏览器下取消默认行为
            e.returnValue && (e.returnValue = false);
            // 添加全局捕获
            obj.setCapture && obj.setCapture();

            // 获取到鼠标点击是鼠标在图片的固定位置
            var disX = e.clientX - obj.offsetLeft;
            var disY = e.clientY - obj.offsetTop;
            // 给文档添加鼠鼠标移动事件
            document.onmousemove = function (e) {
                e = e || event;
                // 获取到垂直方向滚动的距离
                var scrollT = document.documentElement.scrollTop || document.body.scrollTop; //兼容处理
                var x = e.clientX - disX;
                var y = e.clientY + scrollT - disY;
                // 设置图片移动范围
                x = x < 0 ? 0 : x;
                x = x > pos().l - obj.offsetWidth ? pos().l - obj.offsetWidth : x;
                y = y < 0 ? 0 : y;
                y = y > pos().t - obj.offsetHeight ? pos().t - obj.offsetHeight : y;
                // 给图片设施偏移
                obj.style.left = x + 'px';
                obj.style.top = y + 'px';
            }

            // 给文档添加鼠标弹起事件
            document.onmouseup = function () {
                document.onmousemove = null;
                // 释放图片
                obj.releaseCapture && obj.releaseCapture();
            }

        }
        // 获取当前可视范围的函数
        function pos() {
            return {
                l: document.documentElement.clientWidth,
                t: document.documentElement.clientHeight
            }
        }
    }
    // //判断ifrme是否有,有就都关闭
    // function closeIfr() {
    //     var ifr = document.getElementsByTagName('iframe');
    //     for (var i = 0; i < ifr.length; i++) {
    //         ifr[i].style.display = 'none'
    //     }
    // }

    //music iframe点击事件

    var mflag = false;

    $('#m').on('click', function () {


        if (mflag) {

            $('iframe').fadeOut().attr('src', '')
            mflag = false;
        } else {

            $('iframe').fadeIn().attr('src', 'https://www.lori.tw/so/')
            mflag = true;
        }

    })
    // hl的点击事件

    document.getElementById('hl').onclick = function () {

        var ifra2 = document.getElementsByClassName('ifra2')[0].getElementsByTagName('iframe')[0];
        // console.log(ifra2);

        if (mflag) {
            ifra2.src = ''
            ifra2.style.display = 'none';
            mflag = false;
        } else {

            // console.log('111');
            ifra2.src = 'http://validator.w3.org/'
            ifra2.style.display = 'block';

            mflag = true;

        }
    }



    // cs的点击事件

    document.getElementById('cs').onclick = function () {

        var ifra2 = document.getElementsByClassName('ifra2')[0].getElementsByTagName('iframe')[0];
        // console.log(ifra2);

        if (mflag) {
            ifra2.src = ''
            ifra2.style.display = 'none';
            mflag = false;
        } else {
            // console.log('111');
            ifra2.src = 'http://css.doyoe.com/'
            ifra2.style.display = 'block';

            mflag = true;

        }
    }


    // js的点击事件

    document.getElementById('js').onclick = function () {

        var ifra2 = document.getElementsByClassName('ifra2')[0].getElementsByTagName('iframe')[0];
        // console.log(ifra2);

        if (mflag) {
            ifra2.src = ''
            ifra2.style.display = 'none';
            mflag = false;
        } else {
            // console.log('111');
            ifra2.src = 'https://www.html.cn/jqapi-1.9/'
            ifra2.style.display = 'block';

            mflag = true;

        }
    }




    //挂机功能键设置
    var oA = document.getElementById('f')
    var gjz = document.getElementsByClassName('gjz')[0];

    oA.onclick = function () {
        if (gjz.requestFullscreen) {

            gjz.requestFullscreen();
            gjz.style.display = 'block';

        } else if (gjz.webkitRequestFullScreen) {
            gjz.webkitRequestFullScreen();
            gjz.style.display = 'block';
        } else if (div.mozRequestFullScreen) {
            gjz.mozRequestFullScreen();
            gjz.style.display = 'block';

        } else if (gjz.msRequestFullScreen) {
            gjz.webkitRequestFullScreen();
            gjz.style.display = 'block';
        }
    }

    gjz.onclick = function () {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
            gjz.style.display = 'none';

        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
            gjz.style.display = 'none';
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            gjz.style.display = 'none';
        } else if (document.msCancelFullScreen) {
            document.msCancelFullScreen();
            gjz.style.display = 'none';
        }
    }

    // 简历模版动画实现
    //首先需要创建一个动画函数

    function startMove(obj, json, fnEnd) {
        clearInterval(obj.timer);

        obj.timer = setInterval(function () {
            var bStop = true;
            for (var attr in json) {
                var cur = 0;
                if (attr == 'opacity') {
                    cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
                } else {
                    cur = parseInt(getStyle(obj, attr));
                }
                var speed = (json[attr] - cur) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (cur != json[attr])
                    bStop = false;
                if (attr == "opacity") {
                    obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                } else {
                    obj.style[attr] = cur + speed + 'px';
                }
            }
            if (bStop) {
                clearInterval(obj.timer);
                if (fnEnd) fnEnd();
            }
        }, 30);
    }
    //获取元素的style属性
    function getStyle(obj, name) {
        if (obj.currentStyle) {
            return obj.currentStyle[name];
        } else {
            return getComputedStyle(obj, false)[name];
        }
    }

    //简历动画的移入移出调用
    var resDiv = document.getElementsByClassName('resume')[0];
    // console.log(resDiv);

    var resumeDiv = document.getElementsByClassName('resume')[0].getElementsByTagName('div');

    var resume = document.getElementById('re');

    var zhezhao = document.getElementsByClassName('zhezhao')[0];

    var gban = document.getElementsByClassName('resume')[0].getElementsByTagName('img')[0];
    // console.log(gban);

    var kaiguan = true;
    // zhezhao.style.display=block;

    resume.addEventListener('click', function () {

        if (kaiguan) {
            zhezhao.style.display = 'block';
            resDiv.style.display = 'block';
            startMove(resumeDiv[0], {
                'width': 300
            }, function () {
                startMove(resumeDiv[1], {
                    'height': 198
                }, function () {
                    startMove(resumeDiv[2], {
                        'width': 300
                    }, function () {
                        startMove(resumeDiv[3], {
                            'height': 198
                        })
                    })
                })
            })

            kaiguan = false;

        } else {

            alert();
            startMove(resumeDiv[0], {
                'width': 0
            }, function () {
                startMove(resumeDiv[1], {
                    'height': 0
                }, function () {
                    startMove(resumeDiv[2], {
                        'width': 0
                    }, function () {
                        startMove(resumeDiv[3], {
                            'height': 0
                        }, function () {
                            resDiv.style.display = 'none';
                            zhezhao.style.display = 'none';

                        })
                    })
                })
            })
            kaiguan = true;


        }
    });

    gban.addEventListener('click', function () {

        startMove(resumeDiv[0], {
            'width': 0
        }, function () {
            startMove(resumeDiv[1], {
                'height': 0
            }, function () {
                startMove(resumeDiv[2], {
                    'width': 0
                }, function () {
                    startMove(resumeDiv[3], {
                        'height': 0
                    }, function () {
                        resDiv.style.display = 'none';
                        zhezhao.style.display = 'none';

                    })
                })
            })
        })
        kaiguan = true;

    })
})



//轮播图代码

$(function () {
    var uul = document.getElementById('lbul');
    var uli = uul.getElementsByTagName('li');


    var alf = document.getElementById('co_lf');
    var ari = document.getElementById('co_ri');
    // console.log(alf);

    alf.onclick = function () {

        clearInterval(timer);
        timer = setInterval(run, 30)
    }
    ari.onclick = function () {

        clearInterval(timer);
        timer = setInterval(run2, 30);
    }
    console.log(uli[0]);
    uul.innerHTML += uul.innerHTML;
    uul.style.width = uli[0].offsetWidth * uli.length + 'px';
    var speed = 2;

    var timer = null;
    //轮播动画
    function run() {
        uul.style.left = uul.offsetLeft - speed + 'px'
        if (uul.offsetLeft < -uul.offsetWidth / 2) {
            uul.style.left = '0px';
        }
    }

    function run2() {
        uul.style.left = uul.offsetLeft + speed + 'px'
        if (uul.offsetLeft > 0) {
            uul.style.left = -uul.offsetWidth / 2 + 'px';
        }
    }
});


$(function () {
    f
    var wflb = document.getElementById('wflb');
    // console.log(wflb);
    var continuous = document.getElementsByClassName('continuous')[0];
    continuous.style.display = 'none';
    var wuFlag = true;
    wflb.onclick = function () {
        // console.log(wflb);
        if (wuFlag) {
          
            continuous.style.display = 'block';
            wuFlag = false;

        } else {
            continuous.style.display = 'none';
            wuFlag = true;
        }


    }
});

//主页滚动事件添加
$(function () {

    // $(document).scroll(function (e) { 
    //    console.log(e);
    //     $('fullscreen').animate({top:'100%',opacity:".1"},fast,500)
    // });


    var lbpLength = $(".lbp").size();
    var index = 0;
    $(document).on("mousewheel DOMMouseScroll", function (e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));

        if (delta != 0) {
            //  滑动一次index++;
            index++;
            if (index == lbpLength) {
                index = 0;
            }
            //首先要获取lbp的对象数组,并且把所有对象block
            $.each($('.lbp'), function (indexInArray, valueOfElement) {
                $(valueOfElement).css('display', 'none');
                if (index == indexInArray) {


                    $(valueOfElement).css('display', 'flex');
                    $(valueOfElement).animate({
                        'opacity': '0',
                        'left': '80%'
                    },'fast');
                   
                    $(this).animate({
                        'opacity': "1",
                        'left': '10%'
                    }, 'slow');

                }

            });

        }



        // if (delta < 0) {
        //     i++
        //     if(i == lbNum){
        //         i = 0
        //     }

        //      //隐藏全部
        //     $(".lb").each(function(i,e){
        //         $(e).css("display","none");
        //     })
        //     console.log(i)

        //     //显示滚动到的那一页
        //     $(".lb").eq(i).css("display","block");

        // $('.f_one').animate({
        //     left: '800px',
        //     opacity: "0"  
        // }, 'slow').hide(1000);
        // $('.f_two').show(1000);



        // }else{
        //     i--
        //     if(i == -1){
        //        i = lbNum-1;
        //     }

        //      //隐藏全部
        //     $(".lb").each(function(i,e){
        //         $(e).css("display","none");
        //     })
        //     console.log(i)

        //     //显示滚动到的那一页
        //     $(".lb").eq(i).css("display","block");
        //     $(".lb").eq(i).css("opacity",0);
        //     $(".lb").eq(i).animate({"opacity":1},3000)
        // }




    });




});