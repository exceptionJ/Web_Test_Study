/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 19:54:49
 * @LastEditTime: 2019-08-18 12:24:04
 * @LastEditors: Please set LastEditors
 */
$(function () {
    //快捷导航,定位鼠标移入移出事件
    $('#shortcut_fl_a').mouseover(function () {
        $('.fl_xiala').css('display', 'block');
        $('#shortcut_fl_a').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #ccc',
            'border-left': ' 1px solid #ccc',
            'border-right': ' 1px solid #ccc',
            'border-bottom': ' 2px solid #fff',
        });
    });

    $('#shortcut_fl_a').mouseout(function () {
        $('.fl_xiala').css('display', 'none');
        $('#shortcut_fl_a').css({
            'backgroundColor': '#e3e4e5',
            'border-top': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': ''
        });
    });


    $('.fl_xiala').mouseout(function () {
        $('.fl_xiala').css('display', 'none');
        $('#shortcut_fl_a').css({
            'backgroundColor': '#e3e4e5',
            'border-top': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': ''
        });
    });

    $('.fl_xiala').mouseover(function () {
        $('.fl_xiala').css('display', 'block');
        $('#shortcut_fl_a').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #ccc',
            'border-left': ' 1px solid #ccc',
            'border-right': ' 1px solid #ccc',
            'border-bottom': ' 2px solid #fff',
        });
    });
    //end快捷菜单定位结束
    // 我的jd鼠标移入事件
    $('#shortcut_nav_a').mouseover(function () {
        $('.shortcut_fr_myjd_nav').css('display', 'block');
        $('#shortcut_nav_a').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #ccc',
            'border-left': ' 1px solid #ccc',
            'border-right': ' 1px solid #ccc',
            'border-bottom': ' 2px solid #fff',
        });
    });
    $('.shortcut_fr_myjd').mouseout(function () {
        $('.shortcut_fr_myjd_nav').css('display', 'none');
        $('#shortcut_nav_a').css({
            'backgroundColor': '#e3e4e5',
            'border-top': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': ''
        });
    });

    $('.shortcut_fr_myjd_nav').mouseover(function () {
        $('.shortcut_fr_myjd_nav').css('display', 'block');
        $('#shortcut_nav_a').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #ccc',
            'border-left': ' 1px solid #ccc',
            'border-right': ' 1px solid #ccc',
            'border-bottom': ' 2px solid #fff',
        });
    });
    $('.shortcut_fr_myjd_nav').mouseout(function () {
        $('.shortcut_fr_myjd_nav').css('display', 'none');
        $('#shortcut_nav_a').css({
            'backgroundColor': '#e3e4e5',
            'border-top': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': ''
        });
    });

    // 企业采购鼠标事件
    $('#shortcut_nav_qycg').mouseover(function () {

        $('.shortcut_fr_qycg_nav').css('display', 'block');
        $('#shortcut_nav_qycg').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #ccc',
            'border-left': ' 1px solid #ccc',
            'border-right': ' 1px solid #ccc',
            'border-bottom': ' 2px solid #fff',

        });
    });


    $('#shortcut_nav_qycg').mouseout(function () {
        $('.shortcut_fr_qycg_nav').css('display', 'none');
        $('#shortcut_nav_qycg').css({
            'backgroundColor': '#e3e4e5',
            'border-top': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': '',
        });
    });


    $('.shortcut_fr_qycg_nav').mouseover(function () {

        $('.shortcut_fr_qycg_nav').css('display', 'block');
        $('#shortcut_nav_qycg').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #ccc',
            'border-left': ' 1px solid #ccc',
            'border-right': ' 1px solid #ccc',
            'border-bottom': ' 2px solid #fff',

        });
    });


    $('.shortcut_fr_qycg_nav').mouseout(function () {
        $('.shortcut_fr_qycg_nav').css('display', 'none');
        $('#shortcut_nav_qycg').css({
            'backgroundColor': '#e3e4e5',
            'border-top': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': '',
        });
    });

    //客户服务鼠标事件
    $('#shortcut_nav_khfw').mouseover(function () {

        $('.shortcut_fr_khfw_nav').css('display', 'block');
        $('#shortcut_nav_khfw').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #ccc',
            'border-left': ' 1px solid #ccc',
            'border-right': ' 1px solid #ccc',
            'border-bottom': ' 2px solid #fff',

        });
    });


    $('#shortcut_nav_khfw').mouseout(function () {
        $('.shortcut_fr_khfw_nav').css('display', 'none');
        $('#shortcut_nav_khfw').css({
            'backgroundColor': '#e3e4e5',
            'border-top': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': '',
        });
    });


    $('.shortcut_fr_khfw_nav').mouseover(function () {

        $('.shortcut_fr_khfw_nav').css('display', 'block');
        $('#shortcut_nav_khfw').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #ccc',
            'border-left': ' 1px solid #ccc',
            'border-right': ' 1px solid #ccc',
            'border-bottom': ' 2px solid #fff',

        });
    });


    $('.shortcut_fr_khfw_nav').mouseout(function () {
        $('.shortcut_fr_khfw_nav').css('display', 'none');
        $('#shortcut_nav_khfw').css({
            'backgroundColor': '#e3e4e5',
            'border-top': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': '',
        });
    });


    //网站导航鼠标事件
    $('#shortcut_nav_wzdh').mouseover(function () {

        $('.shortcut_fr_wzdh_nav').css('display', 'block');
        $('#shortcut_nav_wzdh').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #ccc',
            'border-left': ' 1px solid #ccc',
            'border-right': ' 1px solid #ccc',
            'border-bottom': ' 2px solid #fff',

        });
    });


    $('#shortcut_nav_wzdh').mouseout(function () {
        $('.shortcut_fr_wzdh_nav').css('display', 'none');
        $('#shortcut_nav_wzdh').css({
            'backgroundColor': '#e3e4e5',
            'border-top': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': '',
        });
    });


    $('.shortcut_fr_wzdh_nav').mouseover(function () {

        $('.shortcut_fr_wzdh_nav').css('display', 'block');
        $('#shortcut_nav_wzdh').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #ccc',
            'border-left': ' 1px solid #ccc',
            'border-right': ' 1px solid #ccc',
            'border-bottom': ' 2px solid #fff',

        });
    });


    $('.shortcut_fr_wzdh_nav').mouseout(function () {
        $('.shortcut_fr_wzdh_nav').css('display', 'none');
        $('#shortcut_nav_wzdh').css({
            'backgroundColor': '#e3e4e5',
            'border-top': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': '',
        });
    });

    //手机jd鼠标事件
    $('#shortcut_nav_sjjd').mouseover(function () {

        $('.shortcut_fr_sjjd_nav').css('display', 'block');
        $('#shortcut_nav_sjjd').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #ccc',
            'border-left': ' 1px solid #ccc',
            'border-right': ' 1px solid #ccc',
            'border-bottom': ' 2px solid #fff',

        });
    });


    $('#shortcut_nav_sjjd').mouseout(function () {
        $('.shortcut_fr_sjjd_nav').css('display', 'none');
        $('#shortcut_nav_sjjd').css({
            'backgroundColor': '#e3e4e5',
            'border-top': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': '',
        });
    });


    $('.shortcut_fr_sjjd_nav').mouseover(function () {

        $('.shortcut_fr_sjjd_nav').css('display', 'block');
        $('#shortcut_nav_sjjd').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #ccc',
            'border-left': ' 1px solid #ccc',
            'border-right': ' 1px solid #ccc',
            'border-bottom': ' 2px solid #fff',

        });
    });


    $('.shortcut_fr_sjjd_nav').mouseout(function () {
        $('.shortcut_fr_sjjd_nav').css('display', 'none');
        $('#shortcut_nav_sjjd').css({
            'backgroundColor': '#e3e4e5',
            'border-top': '',
            'border-left': '',
            'border-right': '',
            'border-bottom': '',
        });
    });

    //  购物车鼠标划入事件
    $('.search_myCar').mouseenter(function () {
        $('.search_myCar_nav').css('display', 'block')
        $('.search_myCar').css({
            'backgroundColor': 'white',
            'border-top': '1px solid #e1251b',
            'border-left': ' 1px solid #e1251b',
            'border-right': ' 1px solid #e1251b',
            'border-bottom': ' 2px solid #fff',
        })

    });
    $('.search_myCar').mouseleave(function () {
        $('.search_myCar_nav').css('display', 'none')
        $('.search_myCar').css({
            'border': '1px solid #e3e4e5'
        })
    });

    // jd主页左侧nav
    $('.inner_main_lf_list').each(function (indexInArray, valueOfElement) {
        $(valueOfElement).mouseover(function () {
            // console.log(1110);
            $('.inner_main_lf_box').css('display', 'block');
            $('.inner_main_lf_box').css('z-index', '9999');
        });
        $(valueOfElement).mouseout(function () {
            // console.log(1);
            $('.inner_main_lf_box').css('display', 'none')
        });

        $('.inner_main_lf_box').mouseover(function () {
            // console.log(1110);
            $('.inner_main_lf_box').css('display', 'block')
        });
        $('.inner_main_lf_box').mouseout(function () {
            // console.log(1);
            $('.inner_main_lf_box').css('display', 'none')
        });

    });

    // 轮播图
    // 左右箭头淡入淡出
    $('.inner_main_mid').mouseenter(function (e) {
        e.preventDefault();
        $('.arrow a').animate({
            'opacity': .7
        }, 'fast');


    });
    $('.inner_main_mid').mouseleave(function (e) {
        e.preventDefault();
        $('.arrow a').stop(true).animate({
            'opacity': .2
        }, 'fast');


    });

    // 左右箭头点击事件
    $('.arrow_fl').click(function (e) {
        e.preventDefault();
        lbindex--;
        if (lbindex < 0) {
            lbindex = lbSize - 1;
        }
        $('.inner_main_mid ul li').eq(lbindex).stop(true, false).fadeIn(800).siblings().fadeOut(800);
        $('.inner_main_mid ol li').eq(lbindex).css('opacity', '1').siblings().css('opacity', '.5');

    });
    $('.arrow_fr').click(function (e) {
        e.preventDefault();
        lbfn();
    });

    //小圆点移入移出事件
    // 获取小圆点的size


    $('.inner_main_mid ol li').mouseenter(function (e) {
        e.preventDefault();

        $('.inner_main_mid ul li').eq($(this).index()).stop(true, false).fadeIn(800).siblings().fadeOut(800);

        $(this).css('opacity', '1').siblings().css('opacity', '.5')

        clearInterval(lbTimer)

    });

    $('.inner_main_mid ol li').mouseleave(function (e) {
        e.preventDefault();
        lbTimer = setInterval(lbfn, 4000);
    });

    //轮播代码

    //   添加一个变量记录
    var lbindex = 0;
    var lbTimer = null;
    $('.inner_main_mid ol li').eq(lbindex).css('opacity', '1').siblings().css('opacity', '.5');
    // $('.inner_main_mid ul li').eq(lbindex).css('display', 'block')

    $('.inner_main_mid ol li')
    // 获取轮播li的长度
    var lbSize = $('.inner_main_mid ul li').size();
    // console.log(lbSize);
    //定时器让轮播一直动
    lbTimer = setInterval(lbfn, 4000);

    function lbfn() {

        lbindex++
        if (lbindex == lbSize) {
            lbindex = 0
        }

        $('.inner_main_mid ul li').eq(lbindex).stop(true, false).fadeIn(800).siblings().fadeOut(800);

        $('.inner_main_mid ol li').eq(lbindex).stop(true, false).css('opacity', '1').siblings().css('opacity', '.5');

    }


    //靠右小轮播
    setInterval(xlbfnadd, 3000);

    var xlbSize = $('.mid2_lb1 li').size();
    var xlbindex = 0;
    //小轮播箭头事件
    $('.mid2_arrow_fl').click(function (e) {
        e.preventDefault();
        xlbfnsub();

    });
    $('.mid2_arrow_fr').click(function (e) {
        e.preventDefault();
        xlbfnadd();
    });


    function xlbfnsub() {
        xlbindex--;
        if (xlbindex < 0) {
            xlbindex = xlbSize - 1;
        }
        $('.mid2_lb1 li').eq(xlbindex).stop(true, false).fadeIn().siblings().fadeOut();
        $('.mid2_lb2 li').eq(xlbindex).stop(true, false).fadeIn().siblings().fadeOut();
        $('.mid2_lb3 li').eq(xlbindex).stop(true, false).fadeIn().siblings().fadeOut();
    }

    function xlbfnadd() {
        xlbindex++
        if (xlbindex == xlbSize) {
            xlbindex = 0
        }
        $('.mid2_lb1 li').eq(xlbindex).stop(true, false).fadeIn().siblings().fadeOut();
        $('.mid2_lb2 li').eq(xlbindex).stop(true, false).fadeIn().siblings().fadeOut();
        $('.mid2_lb3 li').eq(xlbindex).stop(true, false).fadeIn().siblings().fadeOut();
    }



    //主页右侧鼠标移入移出事件
    $('.inner_ri_fuwu_tab li').mouseenter(function () {
        $(this).addClass('tab_active').siblings().removeClass('tab_active');
        $('.inner_ri_fuwu_menu div').eq($(this).index()).show().siblings().hide();
    });

    // 发现好货轮播图

    $('.findGood_inner_lbmove').html(
        $('.findGood_inner_lbmove').html() +
        $('.findGood_inner_lbmove').html()
    );


    $('.findGood_inner_lbmove').width(
        $('.findGood_inner_lbmove li').outerWidth(true) *
        $('.findGood_inner_lbmove li').size()
    );

    // console.log($('.findGood_inner_lbmove').width());

    findGoodmMove();

    setInterval(findGoodmMove, 30);


    function findGoodmMove() {

        $('.findGood_inner_lbmove').css({
            'left': '-=1'
        }, 'linear')

        if ($('.findGood_inner_lbmove').position().left < -1600) {
            $('.findGood_inner_lbmove').css('left', -10);
        }
    }






    //判断侧边框 显示影藏
    //顺便触发下面懒加载函数
    $(window).scroll(function () {
        changeImg();
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() >= $(window).height() / 2) {
            $('.jd_returnTop').fadeIn(1000)
        } else {
            $('.jd_returnTop').fadeOut(500)
        }
        
    });

    // 侧边框返回顶部事件
    $('.jd_returnTop_top').click(function (e) {
        e.preventDefault();

        returnTop();
    });

    function returnTop() {
        $("body,html").animate({
            "scrollTop": 0
        }, '2000')
    }


    // 移动时候头部显示搜索框事件
    $(window).scroll(function () {

        // console.log($(window).scrollTop());
        if ($(window).scrollTop() >= $(window).height()) {
            $('.scoll_header').slideDown(1000)
        } else {
            $('.scoll_header').slideUp()
        }

    });

    //图片加载失败
    // $("img").error(function () {
    //     $("img").replaceWith('Missing image!<br/>浏览器不支持')

    // });

    //原生js实现懒加载,要在img标签里面添加一个懒加载的图片gif替换原来的src.真实的src用其他名字属性写上,一会儿替换
    var imgAll = $('img');
    var arrAll = [];
    console.log(arrAll);
    $.each(imgAll, function (indexInArray, valueOfElement) {
        if ($(valueOfElement).attr('_src')) {
            arrAll.push($(this)[0]);
        }

    });
    $.each(arrAll, function (indexInArray, valueOfElement) {
        $(valueOfElement).attr('isShow', 'false')
    });

    function changeImg() {
        $.each(arrAll, function (indexInArray, valueOfElement) {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() - 300 && $(this).attr('isShow')) {

                $(this).attr('src', $(this).attr('_src'));
                $(this).attr('isShow', 'true');
            }
        });
    }

    // $(window).scroll(function () {

    //     changeImg();
    //     // 这里又要调用scrll事件,可以写到上面的scoll事件一起触发
    // });



    
    //原生懒加载
    /*
	var show_img=oMall.getElementsByTagName('img');
	var cff=[];
	for(var i=0;i<show_img.length;i++)
	{
		if(show_img[i].getAttribute('_src'))
		{
			cff.push(show_img[i]);
		}
	}
	for(var i=0;i<cff.length;i++)
	{
		cff[i].att=true;
	}

	function toChange()
	{
        var iScroll=document.documentElement.scrollTop||document.body.scrollTop;
        
		var iClient=document.documentElement.clientHeight;

		for(var i=0;i<cff.length;i++)
		{
			if( cff[i].offset.top < iClient+iScroll && cff[i].att)
			{
				cff[i].src=cff[i].getAttribute('_src');
				cff[i].style.opacity=0;
				cff[i].style.filter='alpha(opacity:0)';
				startMove(cff[i],{opacity:100});
				cff[i].att=false;
			}
		}
	}
	toChange();

	bindEvent(window,'scroll',function(){
		toChange();
    });
    */


}); //end 入口函数