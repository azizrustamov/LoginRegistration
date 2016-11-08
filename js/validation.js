
$(document).ready(function() {

    //var form = $("#form2");
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


    login1.keyup(validateLogin);
    email.keyup(validateEmail);
    pass1.keyup(validatePass1);
    pass2.keyup(validatePass2);
    name.keyup(validateName);
    surname.keyup(validateSurname);

    function validateName() {
        if (name.val().length < 3) {
            name.removeClass("valid");
            nameInfo.removeClass("valid");
            name.addClass("error");
            nameInfo.addClass("error");
            nameInfo.text("Вам нужно ввести имя");
            status = false;
        } else {
            name.removeClass("error");
            nameInfo.removeClass("error");
            name.addClass("valid");
            nameInfo.addClass("valid");
            nameInfo.text("Ок!");
            status = true;
        }
        return status;
    }

    function validateSurname() {
        if (surname.val().length < 3) {
            surname.removeClass("valid");
            surnameInfo.removeClass("valid");
            surname.addClass("error");
            surnameInfo.addClass("error");
            surnameInfo.text("Вам нужно ввести фамилию");
            status = false;
        } else {
            surname.removeClass("error");
            surnameInfo.removeClass("error");
            surname.addClass("valid");
            surnameInfo.addClass("valid");
            surnameInfo.text("Ок!");
            status = true;
        }
        return status;
    }

    function validateLogin() {
        if (login1.val().length <= 4) {
            login1.removeClass("valid");
            login1Info.removeClass("valid");
            login1.addClass("error");
            login1Info.addClass("error");
            login1Info.text("Вам нужно ввести более 4-х букв");
            status = false;
        } else {
            if (login1.val().length > 4) {
                var ulogin = login1.val();
                $.post('validate.php', {logins: ulogin}, function(data) {
                    if (data != 0) {
                        login1.removeClass("valid");
                        login1Info.removeClass("valid");
                        login1.addClass("error");
                        login1Info.addClass("error");
                        login1Info.text("Этот логин уже зарегистрирован");
                        status = false;
                    } else {
                        login1.removeClass("error");
                        login1Info.removeClass("error");
                        login1.addClass("valid");
                        login1Info.addClass("valid");
                        login1Info.text("Логин доступен");
                        status = true;
                    }
                });
            }
        }
        return status;
    }

    function validateEmail() {
        var uemail = email.val();
        var filter = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if (filter.test(uemail)) {
            $.post('validate.php', {emails: uemail}, function(data) {
                if (data != 0) {
                    email.removeClass("valid");
                    emailInfo.removeClass("valid");
                    email.addClass("error");
                    emailInfo.addClass("error");
                    emailInfo.text("Этот email уже зарегистрирован");
                    status = false;
                } else {
                    email.removeClass("error");
                    emailInfo.removeClass("error");
                    email.addClass("valid");
                    emailInfo.addClass("valid");
                    emailInfo.text("действительный email");
                    status = true;
                }
            });
        } else {
            email.removeClass("valid");
            emailInfo.removeClass("valid");
            email.addClass("error");
            emailInfo.addClass("error");
            emailInfo.text("Введите действительный email");
            status = false;
        }
        return status;
    }

    function validatePass1() {
        if (pass1.val().length < 5) {
            pass1.removeClass("valid");
            pass1Info.removeClass("valid");
            pass1.addClass("error");
            pass1Info.addClass("error");
            pass1Info.text("Пароль должен состоять из не менее 5 знаков");
            status = false;
        } else {
            pass1.removeClass("error");
            pass1Info.removeClass("error");
            pass1.addClass("valid");
            pass1Info.addClass("valid");
            pass1Info.text("Действительный пароль");
            validatePass2();

            status = true;
        }
        return status;
    }

    function validatePass2() {
        if (pass1.val() != pass2.val()) {
            pass2.removeClass("valid");
            pass2Info.removeClass("valid");
            pass2.addClass("error");
            pass2Info.addClass("error");
            pass2Info.text("Пароли не совпадают");
            status = false;
        } else {
            pass2.removeClass("error");
            pass2Info.removeClass("error");
            pass2.addClass("valid");
            pass2Info.addClass("valid");
            pass2Info.text("Пароли совпадают");
            status = true;
        }
        return status;
    }

    $('#registration').click(function(){
        var uname = name.val();
        var usurname = surname.val();
        var ulogin = login1.val();
        var uemail = email.val();
        var upass1 = pass1.val();

        if (validateName() && validateSurname() && validateLogin() && validateEmail() && validatePass1() && validatePass2()) {
           
             $.post('insert.php', {names:uname, surnames:usurname, logins:ulogin, emails: uemail, pass1s: upass1}, function(data) {
             if(data==1){
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
             }  else{
                 alert("not ok");
             } 
            });
        }else{
            alert("fill all info");
        }
    });

        
    
});

