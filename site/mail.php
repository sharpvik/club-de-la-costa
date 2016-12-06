<?php

$recepient = "sharp.vik@gmail.com";
$sitename = "Club de la Costa";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["order"]);

$pagetitle = "New order from the website \"$sitename\"";
$message = "Name: $name \nE-mail: $phone \nText: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");