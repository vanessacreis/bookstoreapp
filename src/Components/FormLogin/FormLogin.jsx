import React from "react";
import Navegar from "../BTNLogin/Botao.jsx";
import { useState } from "react";
import * as S from "./formLogin.js";

const FormLogin = () => {
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
    if (!carrerValue || registrationValue === 6) {
      alert("erro");
    } else {
      localStorage.setItem("carrer", JSON.stringify(carrerValue));
      localStorage.setItem("registration", JSON.stringify(registrationValue));
    }
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
      <h1>{carrerValue}</h1>
      <input
        id="matricula"
        type="text"
        name="matricula"
        placeholder="Insira sua matricula"
        onChange={handleOnChange}
      />
      <Navegar type="submit" onClick={handleClick} />
    </S.Form>
  );
};

export default FormLogin;
