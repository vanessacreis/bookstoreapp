import React from "react";
import * as S from "./livreiro.js";
import FormLogin from "../../Components/FormLogin/FormLogin.jsx";

const UserLogin = () => {
  return (
    <>
      <S.Container>
        <S.Login>
          <img src="/assets/imgs/livraria-vermelho.svg" alt="" />
          <FormLogin />
        </S.Login>
      </S.Container>
    </>
  );
};

export default UserLogin;
