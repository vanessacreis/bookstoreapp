import React from "react";
import * as S from "./equipeCard.js";

const EquipeCard = (props) => {
  return (
    <S.Card>
      <img src={props.imagem} alt="" />
      <h3>{props.nome}</h3>
      <p>{props.cargo}</p>
    </S.Card>
  );
};

export default EquipeCard;
