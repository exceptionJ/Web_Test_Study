<!-- 4.3.  时间处理
时间戳： time()
从 Unix 纪元（格林威治时间 1970-01-01 00:00:00）到当前时间的秒数
格式化日期： date()
获取有格式的当前时间
格式化一个指定的时间戳
可以通过  strtotime() 将有格式的时间字符串转换为时间戳 -->

<?php

date_default_timezone_set('PRC');
$today = date('Y年m月d日<b\r>H:i:s');      
echo date($today);

echo '</br>';


$today = date("Y-m-d H:i:s");   

echo date($today);
echo '</br>';

$timestr ='2019-10-10 12:12:13';

echo '时间戳:'.strtotime($timestr);

?>