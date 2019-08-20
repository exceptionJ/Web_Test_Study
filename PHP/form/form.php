<!-- 1. 注册
1. 用户请求一个注册页面
2. 服务端返回一个注册表单
3. 用户填写表单并提交
4. 服务端接收用户提交的信息
5. 判断是否正确填写内容以及是否勾选同意
6. 如果出现异常界面给出提示，并返回表单
7. 如果都正常，则保存到文件中（每个用户一行） -->



<?php

// var_dump($_POST);
function isTrue()
{
    //判断输入是否合法,合法就存入txt文档,否则返回,注册时失败,请检查
    if (empty($_POST['username'])) {
        $GLOBALS['message'] = '请输入用户名';
        return;
    }
    if (empty($_POST['password'])) {
        $GLOBALS['message'] = '请输入密码';
        return;
    }
    if (empty($_POST['confirmPsw'])) {
        $GLOBALS['message'] = '请再次输入密码';
        return;
    }
    if ($_POST['confirmPsw'] !== $_POST['password']) {
        $GLOBALS['message'] = '两次密码不一致';
        return;
    }


    //如果所有信息正确
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sex = $_POST['sex'];
    $address = $_POST['address'];

    //成功写入txt
    file_put_contents('./user.txt', $username . '---' . $password .'---'.$sex.'---'. $address.'---'."\r\n", FILE_APPEND);

    $GLOBALS['message'] = '注册成功';
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    isTrue();
}


?>
<!DOCTYPE html>
<label lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>表单提交</title>
        <style>
            table {

                text-align: left;
                padding: 15px;
                width: 100%;

            }

            input {
                padding: 5px;
                margin: 10px 0;

            }


            .my_form {
                width: 400px;
                margin: auto;
            }
        </style>
    </head>

    <body>
        <div class="my_form">

            <h1>欢迎注册</h1>
            <?php if (isset($message)) : ?>
            <h2><?php echo $message ?></h2>
            <?php endif ?>
            <form action="<?php $_SERVER['PHP_SELF'] ?>" method="post">
                <table>
                    <tr>
                        <td><label for="username">用户名</label></td>
                        <td>
                            <input type="text" name="username" id="username">
                        </td>
                    </tr>
                    <tr>
                        <td><label for="password">密码</label></td>
                        <td>
                            <input type="password" name="password" id="password">
                        </td>
                    </tr>
                    <tr>
                        <td><label for="confirmPsw">确认密码</label></td>
                        <td>
                            <input type="password" name="confirmPsw" id="confirmPsw">
                        </td>

                    </tr>
                    <tr>
                        <td>性别</td>
                        <td>
                            <label for="man"><input type="radio" name="sex" id="man" value="man">男</label>
                            <label for="woman"><input type="radio" name="sex" id="woman" value="woman">女</label>

                        </td>
                    </tr>
                    <tr>
                        <td>爱好</td>
                        <td>
                            <label for="f"><input type="checkbox" name="fun[]" id="" value="f">篮球</label>
                            <label for="z"><input type="checkbox" name="fun[]" id="" value="z">足球</label>
                            <label for="d"><input type="checkbox" name="fun[]" id="" value="d">地球</label>
                            <label for="r"><input type="checkbox" name="fun[]" id="" value="r">人球</label>
                        </td>
                    </tr>
                    <tr>
                        <td>出生地</td>
                        <td>
                            <select name="address" id="">
                                <option value="中国">中国</option>
                                <option value="中国香港">中国香港</option>
                                <option value="中国台湾">中国台湾</option>
                                <option value="中国澳门">中国澳门</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <a href="">注册即代表同意服务条款</a>
                        </td>

                    </tr>
                    <tr>
                        <td colspan="2">
                            <input type="submit" value="确认注册">
                        </td>


                    </tr>
                </table>
        </div>

        </form>
    </body>

</label>