<?php

require('Conexao.php');

class Contato
{
    public $nome;
    public $mensagem;
    public $data;

    public function inserirBd()
    {
        $con = Conexao::getDb();
        $stmt = $con->query("INSERT INTO contato (nome, mensagem) VALUES ('$this->nome','$this->mensagem');");
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
}
