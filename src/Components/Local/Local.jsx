import React from "react";
import * as S from "./local.js";

const Local = () => {
  const data = new Date();
  const weeks = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const todayIs = `${weeks[data.getDay()]}, ${data.getDate()}/${
    data.getMonth() + 1
  }/${data.getFullYear()}`;
  const hora = `${data.getHours()}h${data.getMinutes()}`;
  return (
    <S.Local>
      <p className="hora">
        {todayIs} <br /> {hora}
      </p>
      <p>
        Estamos de viagem. <br />
        Em breve estaremos em Tiradentes/MG.
      </p>
    </S.Local>
  );
};

export default Local;
