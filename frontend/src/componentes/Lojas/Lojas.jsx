import { lazy , Suspense , Fragment } from "react";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Lojas = () => {
    const Cidade1 = lazy(() => {return import("./code-splitting/Rio");});
    const Cidade2 = lazy(() => {return import("./code-splitting/Spaulo");});
    return (
        <Fragment>
        <Header />
        <main className="my-4 py-3">
            <header className="display-3 text-info text-center mb-5">
                <h1>Nossas lojas</h1>
            </header>
            <table className="table text-center">
                <tr>
                    <Suspense fallback={<p>Carregando cidades</p>}>
                        <Cidade1 />
                    </Suspense>
                    <Suspense fallback={<p>Carregando cidades</p>}>
                        <Cidade2 />
                    </Suspense>  
                    <td>
                        <h3>Santa Catarina</h3>
                        <p>Rua Major Acute vila, 370</p>
                        <p>Vila Mariana</p>
                        <p>(47) 5555-5555</p>
                    </td>
                </tr>

            </table>
         </main>
         <Footer />
         </Fragment>
    );
}

export default Lojas;