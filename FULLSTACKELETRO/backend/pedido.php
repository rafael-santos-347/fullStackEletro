<?php

require('Models/Fullstack.php');

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json"); 

$pedido = Fullstack::ultimoPedido();

print_r(json_encode($pedido[0]));
