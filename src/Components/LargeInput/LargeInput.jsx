import React from "react";
import * as S from "./LargeInput.js";

const LargeInput = (name, onchange, type, value, placeholder) => {
  return (
    <div>
      <S.LargeInput
        name={name}
        onchange={onchange}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LargeInput;
