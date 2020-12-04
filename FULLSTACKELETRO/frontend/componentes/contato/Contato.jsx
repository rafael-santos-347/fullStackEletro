const Contato = () => {

    const [contatos, setContatos] = React.useState([]);

    React.useEffect(async() => {
        const resposta = await fetch('http://localhost/projetos/react/backend/index.php?table=contato');
        setContatos(await resposta.json());
    }, []);

    return(
        <React.Fragment>
            {contatos.map((elemento) => {
                return(
                    <section className="card w-25 mt-5 mx-auto" key={elemento.id_contato}>
                        <div className="card-header">
                           <span className="lead card-text">Nome: {elemento.nome}</span> 
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
