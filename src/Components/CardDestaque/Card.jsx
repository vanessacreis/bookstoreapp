import React from "react";
import * as S from "./card.js";

const Card = (props) => {
  return (
    <S.Card>
      <img src={props.imagem} alt="Capa do livro" />
      <p className="title">{props.name}</p>
      <p className="writer">{props.writer}</p>
    </S.Card>
  );
};

export default Card;
