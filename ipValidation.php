<?php
//класс для проверки времинии регистрации с определенного IP адресса
class ipCheck {

    private $ip;
    private $time;

    function __construct($a, $b) {

        $this->ip = $a;
        $this->time = $b;
    }

    function getIp() {
        return $this->ip;
    }

    function checkTime($c) {
        $start = strtotime($c);
        $end = strtotime($this->time);
        $diff = ceil(abs($end - $start) / 86400);
        echo "$diff";
    }

}

