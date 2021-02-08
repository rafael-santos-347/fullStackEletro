import React from "react";

const Mensagens = () => {

    const [contatos, setContatos] = React.useState([]);

    React.useEffect(async() => {
        const resposta = await fetch('http://localhost:3030/mongo');
        setContatos(await resposta.json());
    }, [contatos]);

    return(
        <React.Fragment>
            {contatos.map((elemento) => {
                return(
                    <section className="card w-25 mt-5 mx-auto" key={elemento._id}>
                        <div className="card-header">
                           <span className="lead card-text">Nome: {elemento.name}</span> 
                        </div>
            
                        <div className="card-body">
                            <span className="lead card-text">Mensagem: {elemento.mensagem}</span> 
                        </div>

                        <div className="card-footer">
                            <span className="lead card-text">Data: {elemento.data}</span> 
                        </div>

                    </section>
                );
            })}
        </React.Fragment>
    );
}

export default Mensagens;
