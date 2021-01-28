const Main = () => {

 /*   function imprimirTodos(event){
        let produtos = document.getElementsByClassName('box_produtos');
        for (let i=0; i < produtos.length; i++) {
            produtos.className = "display:inline-block"; 
        }    
    }

onClick={imprimirTodos} */

    function imprimirCategoria(event) {
        let categoria = ['geladeira', 'fogao', 'microondas', 'lava_loucas', 'lava_roupas'];
        let produtos;
        categoria.map((item) => {
            let listar = event.target.classList[3]; // classList para acessar uma classe em especifico
            let buscar = document.getElementById(item).id;
            if(buscar == listar) {
                //produtos.className = "d-inline-block";
                produtos = document.getElementById(item);
                //produtos.style = "display:inline-block";
                console.log(produtos);
                
                console.log('inline block');
                
            }  else {
                //produtos.className = "d-none";
                console.log('none');
                produtos = document.getElementById(item);
                console.log(produtos);
                //produtos.style = "display:none";
                
            } 
        })
    }
    

    return (
         <main className="my-4 py-3">
             <header>
                 <h1 className="text-dark text-center mb-5">Produtos</h1>
             </header>
             
             <div className="row container-fluid mx-0 px-0 align-items-start">
                 <section className="indice ml-4 mr-0  col-sm-2"> 
                     <h3 className="mt-3 mb-5" >Categorias</h3>
                         <ul className="list-group">
                             <li  className="my-3 list-group-item mouse disabled">Todos (12)</li>
                             <li  className="my-3 list-group-item mouse geladeira disabled" onClick={imprimirCategoria}>Geladeira (3)</li>
                             <li  className="my-3 list-group-item mouse fogao disabled" onClick={imprimirCategoria}>Fogões (2)</li>
                             <li className="my-3 list-group-item mouse microondas disabled" onClick={imprimirCategoria}>Microondas (3)</li>
                             <li  className="my-3 list-group-item mouse lava_loucas disabled" onClick={imprimirCategoria}>Lavadora de roupas (2)</li>
                             <li className="my-3 list-group-item mouse lava_roupas disabled" onClick={imprimirCategoria}>Lava-Louças (2)</li>
                         </ul>
                 </section>

                 <section className="produtos col-sm-8 mt-1 mb-5 container-fluid">
                 <div className="row text-center ">

                     <Produto />

                 </div>
                 </section>
             </div>
          </main>
     );
 }