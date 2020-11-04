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
   if (imagem.style.width == '15vw') {
      imagem.style.width = '10vw';
      imagem.style.height = '19vh';
    } else {
      imagem.style.width = '15vw';
      imagem.style.height = '24vh';
}
};

function font(tamanho) {
  tamanho.style.fontSize = '40px';
  tamanho.style.margin = '5px 5px';
};

function fontOut (tamanho2){
  tamanho2.style.fontSize = '22px';
};