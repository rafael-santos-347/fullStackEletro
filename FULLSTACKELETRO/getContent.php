<?php


    require('conexao.php');

    setlocale(LC_MONETARY, 'pt_BR');

    $table = $_GET['table'];

    $sql = "select * from $table;";
    $resultado = mysqli_query($link, $sql);

    $array = $resultado->fetch_all(MYSQLI_ASSOC);

    foreach($array as $row){
        echo json_encode($row);
    }
?>
