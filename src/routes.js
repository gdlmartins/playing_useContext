import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioProvider } from "common/context/Usuario";
import {CarrinhoProvider} from "common/context/Carrinho";

function Router() {
  return (
      <CarrinhoProvider>
      <UsuarioProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/feira' element={<Feira />} />
          <Route path='/carrinho' element={<Carrinho />} />
        </Routes>
    </BrowserRouter>
      </UsuarioProvider>
      </CarrinhoProvider>
  );
}

export default Router;
