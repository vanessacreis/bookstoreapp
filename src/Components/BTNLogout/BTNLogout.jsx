import React from "react";
import * as S from "./btnLogout.js";

const BTNLivreiro = ({ onClick }) => {
  return (
    <S.btnLivreiro onClick={onClick}>
      <img src="/assets/icons/Logout.svg" alt="" />
      Sair
    </S.btnLivreiro>
  );
};

export default BTNLivreiro;
