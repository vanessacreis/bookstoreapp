import React from "react";
import { Link } from "react-router-dom";
import * as S from "./btnLivreiro.js";

const BTNLivreiro = () => {
  return (
    <S.btnLivreiro>
      <img src="/assets/icons/icon-person.svg" alt="" />
      <Link to="/livreiro" className="link">
        Área do <br />
        Livreiro
      </Link>
    </S.btnLivreiro>
  );
};

export default BTNLivreiro;
