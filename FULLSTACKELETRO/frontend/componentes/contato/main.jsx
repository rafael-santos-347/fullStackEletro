const Main = () => {

    const [aviso, setAviso] = React.useState(false);
    const [mensagem, setMensagem] = React.useState("");
    const [nome, setNome] = React.useState("");

    async function cadastrarBd(event){
        event.preventDefault();
        let data = new FormData(event.target);
        const url = "http://localhost/projetos/react/backend/contato.php";
        const resposta = await fetch(url, {
            method: "POST",
            body: data
        });
        const dados = await resposta.json();
        
        setAviso(dados);

        setTimeout(() => {
            setAviso(false);
            setMensagem("");
            setNome("");
        }, 4000); 
    }

    return (
        <main className="my-4 py-3">
            <header>
                <h1 className="text-center text-dark mb-5">Contato</h1><hr />
            </header>

            <div className="row container-fluid align-items-center justify-content-center mb-5">
                <img className="col-sm-1" id="img1" src="imagens/email.jpg" alt="" />
                <p className="col-sm-4">Contato@fullstackeletro.com</p>
    
                <img className="col-sm-1" id="img2" src="imagens/whatsapp.jpg" width="50px" alt="" />
                <p className="col-sm-4">(11) 9999-9999</p>
            </div>

            <form onSubmit={cadastrarBd} className="form-group text-center mt-5 mb-5 container-fluid" action="http://localhost/projetos/react/backend/contato.php" >
                {aviso && <legend  className="alert alert-primary mx-auto display-5 lead mb-4 w-50" role="alert">Enviado com Sucesso !</legend>} 
                <div className="row align-items-center justify-content-center">
                <label htmlFor="nome" className="col-sm-2 col-form-label "><h4>Nome: </h4></label>
                <input className="form-control-sm col-sm-2 form-control-plaintext" type="text" name="nome" placeholder="Digite seu nome"  value={nome} onChange={(event) => setNome(event.target.value)} />
                </div>
                <div className="row align-items-center justify-content-center mt-3">
                <label htmlFor="msg" className="col-sm-2 col-form-label"><h4>Mensagem: </h4></label>
                <textarea className="form-control-lg col-sm-2 form-control-plaintext" name="msg" placeholder="Digite sua mensagem" value={mensagem} onChange={(event) => setMensagem(event.target.value)}></textarea>
                </div>
                <div className="row align-items-center justify-content-center">
                <input className="btn btn-danger col-sm-1 mt-5"  type="submit" value="Enviar" />
                </div>
            </form>

            <h4 className="display-4 text-center text-dark"> Comentários:</h4>
            <div className="text-center lead mt-5 mb-5">


                <Contato />
            </div>
         </main>
    );
}