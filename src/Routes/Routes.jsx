import React, { useState } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { GlobalStyle } from "../Style/globalStyle.js";
import Header from "../Components/Header/Header.jsx";
import Home from "../Pages/Home/Home.jsx";
import Conheca from "../Pages/Conheca/Conheca.jsx";
import Catalogo from "../Pages/Catalogo/Catalogo.jsx";
import UserLogin from "../Pages/Livreiro/Livreiro.jsx";
import Equipe from "../Pages/Equipe/Equipe.jsx";
import Info from "../Pages/Info/Info.jsx";
import EditarLivro from "../Pages/EditarLivro/EditarLivro.jsx";
import IncluirLivro from "../Pages/IncluirLivro/IncluirLivro.jsx";

const Routes = () => {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header login={login} setLogin={setLogin} />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/conheca" element={<Conheca />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route
          path="/livreiro"
          element={<UserLogin login={login} setLogin={setLogin} />}
        />
        <Route path="/info/:id" element={<Info login={login} />} />
        <Route path="/editar/:id" element={<EditarLivro />} />
        <Route path="/incluir" element={<IncluirLivro />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
