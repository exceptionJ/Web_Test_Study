<?php
$connection=mysqli_connect('127.0.0.1', 'root', '123', 'test');
// phpinfo();

if(!$connection){
exit('<h1>失败</h1>');
}

mysqli_query($connection,'select * from users;');
?>