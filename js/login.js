
$(document).ready(function() {

    var login = $("#login");
    var loginInfo = $("#loginInfo");
    var pass = $("#pass");
    var passInfo = $("#passInfo");
    var status = false;


    $('#enter').click(function() {
        var ulogin = login.val();
        var upass = pass.val();

        if (ulogin != '' && upass != '') {

            $.post('login.php', {logins: ulogin, passs: upass}, function(data) {
                if (data != 1) {
                    
                    
                    window.location.replace("welcome.php?login="+ulogin+"");
                    return true;
                } else {
                    alert("логин или пароль неверный");
                    return false;
                }
            });
        } else {
            loginInfo.removeClass("valid");
            loginInfo.addClass("error");
            passInfo.removeClass("valid");
            passInfo.addClass("error");

            loginInfo.text("Пожалуйста, введите Ваш логин");
            passInfo.text("Пожалуйста, введите Ваш пароль");
            return false;

        }
    });



});

