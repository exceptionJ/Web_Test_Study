/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 19:54:49
 * @LastEditTime: 2019-08-12 00:09:25
 * @LastEditors: Please set LastEditors
 */
$(function () {
    $('#shortcut_fl_a').mouseenter(function () { 
        $('.fl_xiala').css('display','block')
    });
    
    $('#shortcut_fl_a').mouseleave(function () { 
        $('.fl_xiala').css('display','none')
    });
    
});