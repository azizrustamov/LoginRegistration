<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        
        <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="js/login.js"></script>
        <link rel="stylesheet" type="text/css" href="css/mystyle.css">
        <meta charset="UTF-8">
        <title>Войти</title>
    </head>
    <body>
        <div id="container">
            <form id="form1">

                <div>
                    <label for="login">Логин</label>
                    <input id="login" name="login" type="text">
                    <span id="loginInfo"></span>
                </div>

                <div>
                    <label for="pass">Пароль</label>
                    <input id="pass" name="pass" type="password">
                    <span id="passInfo"></span>
                </div>

                <div>
                    <input id="enter" name="voyti" type="button" value="Войти">
                </div>

            </form>
            
            <div>
                <a href="registration.php">Регистрация</a>
            </div>
            
        </div>
    </body>
</html>
