<?php

require("connectionDB.php");

$user = $_POST['email'];
$password = md5($_POST['password']);

$query = " SELECT * FROM utilisateur WHERE email='".$user."' AND password='".$password."'";

$query_result=mysqli_query($connection,$query);

if(!$row = mysqli_fetch_assoc($query_result)){
    echo " is incorrect !";
}else{
    echo "correct";
}