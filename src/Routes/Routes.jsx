import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Home from "../Pages/Home/Home";
import SobreOLivro from "../Pages/InfoLivro/InfoLivro.jsx";
import { GlobalStyle } from "../Style/globalStyle.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/infolivro" element = {<SobreOLivro/>} />
      </Switch>
    </BrowserRouter>
  );
  };

export default Routes;
