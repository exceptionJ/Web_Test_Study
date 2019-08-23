// 类型： 1. 索引数组 2. 关联数组
// 方式： 1. array() 2. [] (PHP 5.4)

<!-- 4.2. 数组处理
获取关联数组中全部的键 / 值
array_keys() / array_values()

判断关联数组中是否存在某个键
array_key_exists()

去除重复的元素
array_unique()

将一个或多个元素追加到数组中
array_push()

$arr[] = 'new value'
删除数组中最后一个元素
array_pop() -->

<?php

$dict = array(
    'hello' => '你好',
    'hello2' => '你好2',
    'hello3' => '你好3',
);

var_dump(array_keys($dict));
var_dump(array_values($dict));

if (isset($dict['hello'])) {
    echo $dict['hello'];
} else {
    echo '没有';
}



if (empty($dict['foo'])) {
    echo '没有';
  } else {
    echo $dict['foo'];
  }
//   return !isset($input) || $input == false