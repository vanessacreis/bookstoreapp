import React from "react";
import LargeInput from "../LargeInput/LargeInput.jsx";
import Input from "../Input/Input.jsx";
import * as S from "./Formulario.js";

const Formulario = (name, onchange, type, value, placeholder) => {
  return (
    <S.Formulario>
      <Input />
      <LargeInput />
    </S.Formulario>
  );
};

export default Formulario;
