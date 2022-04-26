import React from "react";
import { NavLink } from "react-router-dom";
import BTNLivreiro from "../BTNLivreiro/BTNLivreiro.jsx";
import * as S from "./header.js";

const Header = () => {
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
        to="/historia"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        História
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
      <hr />
      <BTNLivreiro />
    </S.Header>
  );
};

export default Header;
