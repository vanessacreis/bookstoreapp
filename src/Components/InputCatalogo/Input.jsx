import React from "react";
import * as S from "./input.js";

function Input(props) {
  return (
    <S.Pesquisa>
      <input
        onChange={props.onChange}
        type="text"
        placeholder="Procure seu livro favorito"
      />
      <S.BTNPesquisa>
        <img src="/assets/icons/search-button.svg" alt="" />
      </S.BTNPesquisa>
    </S.Pesquisa>
  );
}

export default Input;
