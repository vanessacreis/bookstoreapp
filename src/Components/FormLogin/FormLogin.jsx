import React from "react";
import Navegar from "../BTNLogin/Botao.jsx";
import * as S from "./formLogin.js";

const FormLogin = () => {
  return (
    <S.Form>
      <select>
        <option value="disabled">Selecione seu cargo</option>
        <option value="estoquista">Estoquista</option>
        <option value="gerente">Gerente</option>
        <option value="livreiro">Livreiro</option>
        <option value="livreiro">Vendedor</option>
        <option value="livreiro">Supervisor de logistíca</option>
      </select>
      <input
        id="matricula"
        type="text"
        name="matricula"
        placeholder="Insira sua matricula"
      />
      <Navegar />
    </S.Form>
  );
};

export default FormLogin;
