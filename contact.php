<?php 
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $recipient="neil@neiljoshua.com";
    $subject="Web dev inquiry";
    $sender=$_POST["user_name"];             
    $senderEmail=$_POST["user_email"];
    $message=$_POST["user_message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");
}

?>