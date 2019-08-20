<!-- 3.3.1.  定义常量
3.3.2.  使用常量

$x = 75;
$y = 25;
function foo () {
  $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
}
foo();
echo $z; -->
// => 100
// 
// 定义常量使用的是内置的 `define` 函数
// 第一个参数是常量的名称，建议采用全大写字母命名，多个单词下划线分隔
// 第二个参数是常量中存放的数据，可以是任意类型
// 第三个参数是常量名称是否区不分大小写，默认 false 区分大小写
// define('SYSTEM_NAME', '阿里百秀');
// define('SYSTEM_ENABLE', true)

<?php

define('NAME_VAL','张迪士尼');

echo NAME_VAL;