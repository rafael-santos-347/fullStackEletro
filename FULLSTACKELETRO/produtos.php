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
<body class="container-fluid px-0">
    <?php
        require('menu.html');
    ?>

     <header>
        <h1 class="text-dark text-center mb-5">Produtos</h1>
     </header>
  
<div class="row container-fluid mx-0 px-0 align-items-start">    
    <section class="indice ml-4 mr-0  col-sm-2"> 
        <h3 class="mt-3 mb-5" >Categorias</h3>
            <ul>
                <li class="my-3" onclick="imprimirTodos()">Todos (12)</li>
                <li class="my-3" onclick="imprimirCategoria('geladeira')">Geladeira (3)</li>
                <li class="my-3" onclick="imprimirCategoria('fogao')">Fogões (2)</li>
                <li class="my-3" onclick="imprimirCategoria('microondas')">Microondas (3)</li>
                <li class="my-3" onclick="imprimirCategoria('lava_roupas')">Lavadora de roupas (2)</li>
                <li class="my-3" onclick="imprimirCategoria('lava_loucas')">Lava-Louças (2)</li>
            </ul>
            
    </section>

    <section class="produtos col-sm-8 mt-1 mb-5 container-fluid">
      <div class="row  text-center ">
<?php
    $sql = "select * from produtos;";
    $resultado = mysqli_query($link, $sql);

    if($resultado->num_rows > 0) {
        while($linha = $resultado->fetch_assoc()) {
           
?>
        
        <div class="col-sm-4 my-3" id="<?php echo $linha['nome'];?>" style="display: inline-block;">
                <img class="mb-4" id="img_produto" src="<?php echo $linha['nome_imagens'];?>" onclick="destaque(this)"><br>
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
    </div>
    </section>
    </div>
    
    <?php
        require('footer.html');
    ?>

</body>
</html>