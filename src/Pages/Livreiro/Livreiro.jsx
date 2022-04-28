import React from "react";
import * as S from "./livreiro.js";
import Footer from "../../Components/Footer/Footer.jsx";
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
      <Footer />
    </>
  );
};

export default UserLogin;
