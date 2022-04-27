import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { GlobalStyle } from "../Style/globalStyle.js";
import Header from "../Components/Header/Header.jsx";
import Home from "../Pages/Home/Home.jsx";
import UserLogin from "../Pages/Livreiro/Livreiro.jsx";
import Equipe from "../Pages/Equipe/Equipe.jsx";
import Info from "../Pages/Info/Info.jsx";

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/livreiro" element={<UserLogin />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/info/:id" element={<Info />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
