<?php

if (isset($_POST['names']) && isset($_POST['surnames']) && isset($_POST['logins']) && isset($_POST['emails']) && isset($_POST['pass1s'])) {
    
    $name = $_POST['names'];
    $surname = $_POST['surnames'];
    $login = $_POST['logins'];
    $email = $_POST['emails'];
    $pass1 = md5($_POST['pass1s']);

    
        mysql_connect("localhost", "root", "") or die("We could not connect!");
        mysql_select_db("registration");

        
        if (mysql_query("INSERT INTO users(name, surname, login, email, pass) VALUES('$name', '$surname', '$login', '$email', '$pass1')")) {
            echo 1;
        } else {
            echo 0;
        }
    
}
