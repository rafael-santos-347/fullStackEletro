<?php

require('Conexao.php');

class Fullstack 
{
    public $produtos;
    public $pedidos;
    public $contato;

    public static function getAll($table)
    {
        $con = Conexao::getDb();
        $stmt = $con->query("select * from $table;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);          
    }

    public static function ultimoPedido()
    {
        $con = Conexao::getDb();
        $stmt = $con->query("SELECT pedidos.nome_produto AS produto, pedidos.nome_cliente AS cliente, pedidos.valor_total AS preço FROM produtos INNER JOIN pedidos ON produtos.nome = pedidos.nome_produto ORDER BY pedidos.id_pedidos DESC;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
