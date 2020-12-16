<?php

require('Models/Fullstack.php');

header("Access-Control-Allow-Origin:*");

$cliente = $_GET['cliente'];
$endereco = $_GET['endereco'];
$telefone = $_GET['telefone'];
$produto = $_GET['produto'];
$valor = $_GET['valor'];
$quantidade = $_GET['quantidade'];


if($cliente == "" || $endereco == "" || $telefone == "" || $produto == "") {
    echo "<script> window.location('C:/wamp64/www/projetos/react/frontend/pedidos.html');</script>";
} else {
    Fullstack::inserirBd2($cliente, $endereco, $telefone, $produto, $valor, $quantidade);
    echo "Enviado com sucesso !";
    echo "<script> window.location('C:/wamp64/www/projetos/react/frontend/pedidos.html');</script>";
}
