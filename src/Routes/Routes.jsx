import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Home from "../Pages/Home/Home";
import EditarLivro from "../Pages/EditarLivro/EditarLivro.jsx";
import IncluirLivro from "../Pages/IncluirLivro/IncluirLivro.jsx";
import { GlobalStyle } from "../Style/globalStyle.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/editar/:id" element={<EditarLivro />} />
        <Route path="/incluir" element={<IncluirLivro />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
