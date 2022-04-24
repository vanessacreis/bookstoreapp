import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Conheca from "../Pages/Conheca/Conheca.jsx";
import Home from "../Pages/Home/Home";
import { GlobalStyle } from "../Style/globalStyle.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/conheca" element={<Conheca />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
