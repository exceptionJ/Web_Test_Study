<?php

$str='字符串';

echo strlen($str);
echo '<br/>';

echo strlen('你好');
echo '<br/>';

echo mb_strlen('你好');
echo '<br/>';
echo mb_strlen($str);