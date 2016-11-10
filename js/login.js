//jquery файл для формы входа

$(document).ready(function() {

    var login = $("#login");
    var loginInfo = $("#loginInfo");
    var pass = $("#pass");
    var passInfo = $("#passInfo");
    var logError = $("#logError");
    var status = false;


    $('#enter').click(function(e) {
        //e.preventDefault();
        var ulogin = login.val();
        var upass = pass.val();

        if (ulogin != '' && upass != '') {

            $.post('login.php', {logins: ulogin, passs: upass}, function(data) {
                if (data != 1) {
                    window.location.replace("welcome.php?login="+ulogin+"");
                    
                  
                  return true;
                } else {
                    e.preventDefault();
                    logError.removeClass("valid");
                    logError.addClass("error");
                    logError.text("Неверный логин или пароль");
                    
                    return false;
                }
            });
        } else if(ulogin=='' && upass==''){
            loginInfo.removeClass("valid");
            loginInfo.addClass("error");
            loginInfo.text("Пожалуйста, введите Ваш логин");
            
            passInfo.removeClass("valid");
            passInfo.addClass("error");
            passInfo.text("Пожалуйста, введите Ваш пароль");
            return false;
        }else if(upass==''){
            passInfo.removeClass("valid");
            passInfo.addClass("error");
            passInfo.text("Пожалуйста, введите Ваш пароль");
            return false;
        }
        else{
            loginInfo.removeClass("valid");
            loginInfo.addClass("error");
            loginInfo.text("Пожалуйста, введите Ваш логин");
            
            return false;
        }
    });



});

