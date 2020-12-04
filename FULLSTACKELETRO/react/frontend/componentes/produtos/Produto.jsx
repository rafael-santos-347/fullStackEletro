const Produto = () => {

    const [produtos, setProdutos] = React.useState([]);

    React.useEffect(async() => {
        const resposta = await fetch('http://localhost/projetos/react/backend/index.php?table=produtos');
        setProdutos(await resposta.json());
    }, []);

    return(
        <React.Fragment>
            {produtos.map((elemento) => {
                return(
                    <section className="col-sm-4 h-50 w-25 my-1 display-inline-block" id={elemento.id_produtos}>
                        <img className="img-fluid w-50" id={elemento.nome} src={elemento.nome_imagens} /><br />
                        <p className="p1">{elemento.descricao}</p><hr />
                        <p className="p1 p2">R$ 5.609,90</p>
                        <p className="p3">{elemento.preco}</p>
                    </section>
                );
            })}
        </React.Fragment>
    );
}
