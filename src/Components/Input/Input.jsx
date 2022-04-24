import React from "react";
import * as S from "./Input.js";

const Input = (name, onchange, type, value, placeholder) => {
  return (
    <div>
      <S.Input
        name={name}
        onchange={onchange}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
