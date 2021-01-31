<?php


require('connectionDB.php');

//echo json_encode($array);

if (isset($_POST['action'])) {
    if ($_POST['action'] == 'displayEditForm') {
        $query = "select * from serice where id=" . $_POST['idService'];
        $query_result = $connection->query($query);
        $array = mysqli_fetch_all($query_result);
        echo json_encode($array);
    } else if ($_POST['action'] == 'displayData') {

        $query = "select * from serice";

        $query_result = $connection->query($query);

        $array = mysqli_fetch_all($query_result);
        echo json_encode($array);
    } else if ($_POST['action'] == 'edit') {
        $query = "update serice set nom='" . $_POST['data']['nomService'] . "', petite_description='" . $_POST['data']['petiteDescription'] . "',description='" . $_POST['data']['description'] . "',image='" . $_POST['data']['media'] . "' where id=" . $_POST["data"]["serviceId"];

        $query_result = $connection->query($query);

        if ($query_result == true)
            echo "success";
        else echo "error";
    } else if ($_POST['action'] == 'add') {
        $query = "insert into serice (nom,petite_description,description,image) values ('" . $_POST['data']['nomService'] . "','" . $_POST['data']['petiteDescription'] . "','" . $_POST['data']['description'] . "','" . $_POST['data']['media'] . "')";
        $query_result = $connection->query($query);

       

         if ($query_result == true)
            echo "success";
        else echo "error"; 
    }else if ($_POST['action'] == 'delete') {
        $query = "delete from serice where id=".$_POST['data'];
        $query_result = $connection->query($query);
         if ($query_result == true)
            echo "success";
        else echo "error"; 
    }
}
