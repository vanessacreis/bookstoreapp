import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BTNLivreiro from "../BTNLivreiro/BTNLivreiro.jsx";
import BTNLogout from "../BTNLogout/BTNLogout.jsx";
import * as S from "./header.js";

const Header = ({ login, setLogin }) => {
  const navigate = useNavigate();

  function handleSair() {
    setLogin(false);
    navigate("/");
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
      {login && (
        <NavLink
          to="/incluir"
          className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
        >
          Incluir
        </NavLink>
      )}
      <hr />
      {!login ? <BTNLivreiro /> : <BTNLogout onClick={handleSair} />}
    </S.Header>
  );
};

export default Header;
