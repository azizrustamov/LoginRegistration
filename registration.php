<html>
    <head>
        
        <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="js/validation.js"></script>
        <link rel="stylesheet" type="text/css" href="css/mystyle.css">
        <meta charset="UTF-8">
        <title>Зарегистрироваться</title>
    </head>
    <body>
        
        <div id="container1">
            
            <div id="reg">Регистрация</div>
            
            <form id="form2">

                <div>
                    <label for="name">Имя</label>
                    <input id="name" name="name" type="text" />
                    <span id="nameInfo">Пожалуйста, введите Ваше имя</span>
                </div>
                
                <div>
                    <label for="surname">Фамилия</label>
                    <input id="surname" name="surname" type="text" />
                    <span id="surnameInfo">Пожалуйста, введите Вашу фамилию</span>
                </div>
                
                <div>
                    <label for="login1">Логин</label>
                    <input id="login1" name="login1" type="text" />
                    <span id="login1Info">Пожалуйста, введите Ваш логин</span>
                </div>
                
                <div>
                    <label for="email">Email</label>
                    <input id="email" name="email" type="text" />
                    <span id="emailInfo">Пожалуйста, введите Ваш email</span>
                </div>
                
                <div>
                    <label for="pass1">Пароль</label>
                    <input id="pass1" name="pass1" type="password" />
                    <span id="pass1Info">Пожалуйста, введите пароль</span>
                </div>
                
                <div>
                    <label for="pass2"> Подтвердите пароль</label>
                    <input id="pass2" name="pass2" type="password" />
                    <span id="pass2Info">Пожалуйста, подтвердите пароль</span>
                </div>

                <div>
                    <input id="registration" name="registration" type="button" value="Зарегистрироваться" />
                </div>

            </form>
                
            <div id="login">
                <a href="index.php">Войти</a>
            </div>
        </div>
    </body>
</html>
