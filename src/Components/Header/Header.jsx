import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BTNLivreiro from "../BTNLivreiro/BTNLivreiro.jsx";
import * as S from "./header.js";

const Header = ({ login, setLogin }) => {
  function handleSair() {
    console.log("oi");
    setLogin(false);
  }

  return (
    <S.Header>
      <hr />
      <NavLink
        to="/"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/conheca"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Conheça
      </NavLink>
      <NavLink
        to="/catalogo"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Catálogo
      </NavLink>
      <NavLink
        to="/equipe"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Equipe
      </NavLink>
      {login && "adicionar"}
      <hr />
      {!login ? <BTNLivreiro /> : <button onClick={handleSair}>Sair</button>}
    </S.Header>
  );
};

export default Header;
