import React from "react";
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
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/conheca" element={<Conheca />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/livreiro" element={<UserLogin />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/editar/:id" element={<EditarLivro />} />
        <Route path="/incluir" element={<IncluirLivro />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
