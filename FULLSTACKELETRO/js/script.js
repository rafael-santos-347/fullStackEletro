function imprimirCategoria(categoria) {
 let produtos = document.getElementsByClassName('box_produtos');
  for (i=0; i < produtos.length; i++) {
      if(categoria == produtos[i].id) {
          produtos[i].style = "display:inline-block";
      } else {
        produtos[i].style = "display:none";
      }
  }

};

function imprimirTodos(){
    let produtos = document.getElementsByClassName('box_produtos');
    for (i=0; i < produtos.length; i++) {
        if(produtos.length <= 12) {
            produtos[i].style = "display:inline-block";
        } 
        
    }
};



function destaque(imagem) {
  let img = imagem.style = "width:260px;height:300px;";
  let img2 = imagem.style = "width:200px;height:250px";

  if (img2 == "width:200px;height:250px") {
    imagem.style = "width:260px;height:300px;";
  } else if (img == "width:260px;height:300px;") {
    imagem.style = "width:200px;height:250px";
  }
  
};

