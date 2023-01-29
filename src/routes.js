import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioProvider } from "common/context/Usuario";

function Router() {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/feira' element={<Feira />} />
        </Routes>
      </UsuarioProvider>
        <Routes>
          <Route path='/carrinho' element={<Carrinho />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
