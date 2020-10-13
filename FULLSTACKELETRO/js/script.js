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
   if (imagem.style.width == '260px') {
      imagem.style.width = '200px';
      imagem.style.height = '250px';
    } else {
      imagem.style.width = '260px';
      imagem.style.height = '300px';
}
};

function destaque2(img) {
    img.style.width = '80%';
    img.style.height = '95%';
};

function out(img2){
  img2.style.width = '60%';
  img.style.height = '85%';
};

function font(tamanho) {
  tamanho.style.fontSize = '40px';
  tamanho.style.margin = '5px 5px';
};

function fontOut (tamanho2){
  tamanho2.style.fontSize = '22px';
};