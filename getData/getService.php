<?php 


$host = "localhost";
$user = "root";
$password = "";
$bd = "db_service";

$connection = new mysqli($host, $user, $password, $bd);
$connection->set_charset("utf8");

if(isset($_POST["action"])) {
    if($_POST["action"]=="display_home") {
        $query="select * from serice";
        $query_result = $connection->query($query);
        $array = mysqli_fetch_all($query_result);
        echo json_encode($array);
    }

}


?>