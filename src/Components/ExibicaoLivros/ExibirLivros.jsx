import React from "react";
import * as S from "./exibirLivro.js";

function ExibirLivros(props) {
  return (
    <S.Card>
      <img src={props.imagem} alt="" />
      <p>{props.Name}</p>
      <p>Autor: {props.Writer}</p>
    </S.Card>
  );
}

export default ExibirLivros;
