import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./formLogin.js";

const FormLogin = ({ login, setLogin }) => {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    setLogin(true);
    navigate("/catalogo");
  }

  return (
    <S.Form>
      <select>
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
      />
      <S.Botao onClick={handleClick}>Entrar</S.Botao>
    </S.Form>
  );
};

export default FormLogin;
