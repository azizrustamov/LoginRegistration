// jquery файл для формы регистрации
$(document).ready(function() {
    
    var name = $("#name");
    var nameInfo = $("#nameInfo");
    var surname = $("#surname");
    var surnameInfo = $("#surnameInfo");
    var email = $("#email");
    var emailInfo = $("#emailInfo");
    var login1 = $("#login1");
    var login1Info = $("#login1Info");
    var pass1 = $("#pass1");
    var pass1Info = $("#pass1Info");
    var pass2 = $("#pass2");
    var pass2Info = $("#pass2Info");
    var status = false;
    
    //проверка данных пользователя при вводе
    login1.keyup(validateLogin); 
    email.keyup(validateEmail);
    pass1.keyup(validatePass1);
    pass2.keyup(validatePass2);
    name.keyup(validateName);
    surname.keyup(validateSurname);
    
    //функция валидации имени пользователя: проверяется длинна имени
    function validateName() {
        if (name.val().length < 3) {
            nameInfo.removeClass("valid");
            nameInfo.addClass("error");
            nameInfo.text("Вам нужно ввести имя");
            status = false;
        } else {
            nameInfo.removeClass("error");
            nameInfo.addClass("valid");
            nameInfo.text("Ок!");
            status = true;
        }
        return status;
    }
    //функция валидации фамилии пользователя: проверяется длинна фамилии
    function validateSurname() {
        if (surname.val().length < 3) {
            surnameInfo.removeClass("valid");
            surnameInfo.addClass("error");
            surnameInfo.text("Вам нужно ввести фамилию");
            status = false;
        } else {
            surnameInfo.removeClass("error");
            surnameInfo.addClass("valid");
            surnameInfo.text("Ок!");
            status = true;
        }
        return status;
    }
    //функция валидации логина пользователя: проверяется длинна логина и естли несушествует пользователь с таким логином
    function validateLogin() {
        if (login1.val().length <= 4) {
            login1Info.removeClass("valid");
            login1Info.addClass("error");
            login1Info.text("Вам нужно ввести более 4-х букв");
            status = false;
        } else {
            if (login1.val().length > 4) {
                var ulogin = login1.val();
                $.post('validate.php', {logins: ulogin}, function(data) {
                    if (data != 0) {
                        login1Info.removeClass("valid");
                        login1Info.addClass("error");
                        login1Info.text("Этот логин уже зарегистрирован");
                        status = false;
                    } else {
                        login1Info.removeClass("error");
                        login1Info.addClass("valid");
                        login1Info.text("Ok!");
                        status = true;
                    }
                });
            }
        }
        return status;
    }
    
    //функция валидации электронной почты пользователя
    function validateEmail() {
        var uemail = email.val();
        var filter = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if (uemail != '' && filter.test(uemail)) {
            $.post('validate.php', {emails: uemail}, function(data) {
                if (data != 0) {
                    emailInfo.removeClass("valid");
                    emailInfo.addClass("error");
                    emailInfo.text("Этот email уже зарегистрирован");
                    status = false;
                } else {
                    emailInfo.removeClass("error");
                    emailInfo.addClass("valid");
                    emailInfo.text("Ok!");
                    status = true;
                }
            });
        } else {
            emailInfo.removeClass("valid");
            emailInfo.addClass("error");
            emailInfo.text("Введите действительный email");
            status = false;
        }
        return status;
    }
    //функция валидации пароля пользователя: проверяется длинна паролья
    function validatePass1() {
        if (pass1.val().length < 5) {
            pass1Info.removeClass("valid");
            pass1Info.addClass("error");
            pass1Info.text("Пароль должен состоять из не менее 5 знаков");
            status = false;
        } else {
            pass1Info.removeClass("error");
            pass1Info.addClass("valid");
            pass1Info.text("Ok!");
            validatePass2();

            status = true;
        }
        return status;
    }
    //функция повторной валидации пароля пользователя: сравнивается с первым паролем
    function validatePass2() {
        if (pass1.val() != pass2.val()) {
            pass2Info.removeClass("valid");
            pass2Info.addClass("error");
            pass2Info.text("Пароли не совпадают");
            status = false;
        } else {
            pass2Info.removeClass("error");
            pass2Info.addClass("valid");
            pass2Info.text("Пароли совпадают");
            status = true;
        }
        return status;
    }

    //регистрация: введенные пользователем данные отправлються в insert.php и проверяется естли с коспютера нового пользователя
    //не было регимтрации за последнее 30 дней
    $('#registration').click(function() {
        var uname = name.val();
        var usurname = surname.val();
        var ulogin = login1.val();
        var uemail = email.val();
        var upass1 = pass1.val();

        if (validateName() && validateSurname() && validateLogin() && validateEmail() && validatePass1() && validatePass2()) {

            $.post('insert.php', {names: uname, surnames: usurname, logins: ulogin, emails: uemail, pass1s: upass1}, function(data) {
                if (data == 1) {
                    name.val('');
                    surname.val('');
                    login1.val('');
                    email.val('');
                    pass1.val('');
                    pass2.val('');

                    nameInfo.removeClass("valid", "error");
                    surnameInfo.removeClass("valid", "error");
                    login1Info.removeClass("valid", "error");
                    emailInfo.removeClass("valid", "error");
                    pass1Info.removeClass("valid", "error");
                    pass2Info.removeClass("valid", "error");

                    nameInfo.text("Пожалуйста, введите Ваше имя");
                    surnameInfo.text("Пожалуйста, введите Вашу фамилию");
                    login1Info.text("Пожалуйста, введите Ваш логин");
                    emailInfo.text("Пожалуйста, введите Ваш email");
                    pass1Info.text("Пожалуйста, введите пароль");
                    pass1Info.text("Пожалуйста, подтвердите пароль");
                    alert("Регистрация прошла успешно");
                } else if(data==2){
                    alert("Регистрация с Вашего компьютера невозможно");
                }else{
                    alert("something went wrong");
                }
                    
            });
        } else {
            alert("Заполните все поля");
        }
    });



});

