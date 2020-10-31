    <?php
        require('conexao.php');
    ?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos Full Stack Eletro</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js"></script>

  
</head>
<body>
    <?php
        require('menu.html');
    ?>

     <header>
        <h1 class="h1_produtos">Produtos</h1><hr>
     </header>
    
    <section class="indice"> 
        <h3 >Categorias</h3>
            <ul>
                <li onclick="imprimirTodos()">Todos (12)</li>
                <li onclick="imprimirCategoria('geladeira')">Geladeira (3)</li>
                <li onclick="imprimirCategoria('fogao')">Fogões (2)</li>
                <li onclick="imprimirCategoria('microondas')">Microondas (3)</li>
                <li onclick="imprimirCategoria('lava_roupas')">Lavadora de roupas (2)</li>
                <li onclick="imprimirCategoria('lava_loucas')">Lava-Louças (2)</li>
            </ul>
            
    </section>

    <section class="produtos">
<?php
    $sql = "select * from produtos;";
    $resultado = mysqli_query($link, $sql);

    if($resultado->num_rows > 0) {
        while($linha = $resultado->fetch_assoc()) {
           
?>
        
        <div class="box_produtos" id="<?php echo $linha['nome'];?>" style="display: inline-block;">
                <img src="<?php echo $linha['nome_imagens'];?>" onclick="destaque(this)"><br>
                <p class="p1"><?php echo $linha['descricao'];?></p><hr>
                <p class="p1 p2">R$ 5.609,90</p>
                <p class="p3" onmousemove="font(this)" onmouseout="fontOut(this)" ><?php echo $linha['preco'];?></p>
        </div>
<?php

    }
    } else {
        echo "Nenhum produto cadastrado !";
    }
?>
      
    </section>
    
    
    <!--Cabeçalho-->
    <footer>
        <h4 class="h4_cabeçalho">Formas de Pagamento</h4>
        <img class="img_cabeçalho"  src="imagens/pag.jpeg" alt="Formas de Pagamento">
        <p class="p_cabeçalho">&copy; Recodepro</p>
    </footer>
    
    <!--Fim Cabeçalho-->
</body>
</html>