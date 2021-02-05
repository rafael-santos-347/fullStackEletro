import React from "react";
import { lazy, Suspense } from "react";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Efeito from "./code-splitting/Efeito";

const Listagem = lazy(() => {return import('./code-splitting/index')});

const Produtos = () => {

    function imprimirCategoria(event) {
        let categoria = ['geladeira', 'fogao', 'microondas', 'lava_loucas', 'lava_roupas'];
        let produtos;
        categoria.map((item) => {
            let listar = event.target.classList[3];
            let buscar = document.getElementById(item).id;
            if(buscar == listar) {
                
                produtos = document.getElementById(item);
                
                console.log(produtos);
                
                console.log('inline block');
                
            }  else {
                
                console.log('none');
                produtos = document.getElementById(item);
                console.log(produtos);
                
                
            } 
        })
    }
    

    return (
        <React.Fragment>
            <Header />
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

                <Suspense fallback={<Efeito />}>
                    <Listagem />
                </Suspense>

             </div>
          </main>
          <Footer />
        </React.Fragment>
     );
 }

 export default Produtos;