import React from "react";
import * as S from "./botao.js";
import { useNavigate } from "react-router-dom";

const Navegar = () => {
  const navigate = useNavigate();

  return <S.Login onClick={() => navigate("/catalogo")}>Entrar</S.Login>;
};

export default Navegar;
