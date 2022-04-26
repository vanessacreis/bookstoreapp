import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Home from "../Pages/Home/Home.jsx";
import UserLogin from "../Pages/Livreiro/Livreiro.jsx";
import { GlobalStyle } from "../Style/globalStyle.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/livreiro" element={<UserLogin />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
