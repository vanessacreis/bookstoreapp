import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Home from "../Pages/Home/Home.jsx";
import UserLogin from "../Pages/Livreiro/Livreiro.jsx";
import SobreOLivro from "../Pages/InfoLivro/InfoLivro.jsx";
import { GlobalStyle } from "../Style/globalStyle.js";
import Equipe from "../Pages/Equipe/Equipe.jsx";

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/livreiro" element={<UserLogin />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/info/:id" element = {<SobreOLivro/>} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
  };

export default Routes;
