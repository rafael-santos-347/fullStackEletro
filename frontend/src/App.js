import React from 'react';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Contato from './componentes/Contato/Contato';
import Home from './pages/index';
import Lojas from './componentes/Lojas/Lojas';
import Erro from './componentes/NotFound/Erro';
import Pedidos from './componentes/Pedidos/Pedidos';
import Produtos from './componentes/Produtos/Produtos';
import './css/global.css';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/loja" element={<Lojas />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
