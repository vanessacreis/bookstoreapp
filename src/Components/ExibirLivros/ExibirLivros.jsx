import React from "react";
import * as S from "./exibirLivro.js";

function ExibirLivros(props) {
  return (
    <S.Card>
      <img src={props.imagem} alt="" />
      <p className="titulo">{props.name}</p>
      <p>{props.writer}</p>
    </S.Card>
  );
}

export default ExibirLivros;
