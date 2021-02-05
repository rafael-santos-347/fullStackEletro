import React from 'react';

const Produto = () => {

    const [produtos, setProdutos] = React.useState([]);
   

    React.useEffect(async() => {
        const resposta = await fetch('http://localhost:3030/?table=produtos');
        setProdutos(await resposta.json());
    }, []);

    function font(event){
        event.target.className = 'display-4 text-uppercase text-danger';
    }

    function fontOut(event){
        event.target.className = 'p3';
    }

    function destaque(event){
        if(event.target.id == 'img_produto2'){
            event.target.id = 'img_produto';
        } else {
            event.target.id = 'img_produto2';
        }
    }
   
  
    return(
        <React.Fragment>
            {produtos.map((elemento) => {
                return(
                    <section key={elemento.id_produtos} className="col-4 h-50 w-25 my-4 py-1 box_produtos display-inline-block " id={elemento.nome} >
                        <img onClick={destaque} className="img-fluid" id="img_produto" src={elemento.nome_imagens}/><br />
                        <p className="p1">{elemento.descricao}</p><hr />
                        <p className="p1 p2">R$ 5.609,90</p>
                        <p className="p3" onMouseMove={font} onMouseOut={fontOut}>{elemento.preco}</p>
                    </section>
                );
            })}
        </React.Fragment>
    );
}

export default Produto;
