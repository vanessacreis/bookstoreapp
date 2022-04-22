import React from "react";
import * as S from "./eventos.js";

const Eventos = () => {
  return (
    <S.Evento>
      <img src="/assets/imgs/Evento.png" alt="" />
      <hr />
      <h3>Próximos eventos</h3>
      <p>
        Lançamento do livro <b>Cidades Afundam em Dias Normais</b> de Aline
        Valek.
      </p>
    </S.Evento>
  );
};

export default Eventos;
