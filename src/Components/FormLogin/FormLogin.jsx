import React from "react";
import Navegar from "../BTNLogin/Botao.jsx";
import { useState } from "react";
import * as S from "./formLogin.js";

const FormLogin = ({ login, setLogin }) => {
  const [carrerValue, setCarrerValue] = useState("");
  const [registrationValue, setRegistrationValue] = useState("");

  function handleOnChange(e) {
    setRegistrationValue({
      ...registrationValue,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick(e) {
    e.preventDefault();
    setLogin(true);
  }

  return (
    <S.Form>
      <select
        onChange={(e) => {
          const selectCarrer = e.target.value;
          setCarrerValue(selectCarrer);
        }}
      >
        <option value="disabled">Selecione seu cargo</option>
        <option value="estoquista">Estoquista</option>
        <option value="gerente">Gerente</option>
        <option value="livreiro">Livreiro</option>
        <option value="Vendedor">Vendedor</option>
        <option value="Supervisor">Supervisor de logistíca</option>
      </select>
      <input
        id="matricula"
        type="number"
        name="matricula"
        placeholder="Insira sua matricula"
        onChange={handleOnChange}
      />
      <button onClick={handleClick}>ENtrar</button>
    </S.Form>
  );
};

export default FormLogin;
