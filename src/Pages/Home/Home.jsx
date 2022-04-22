import React from "react";
import BoxLogo from "../../Components/BoxLogo/BoxLogo.jsx";
import Conheca from "../../Components/Conheça/Conheca.jsx";
import Eventos from "../../Components/Eventos/Eventos.jsx";
import Favoritos from "../../Components/Favoritos/Favoritos.jsx";
import LargeFooter from "../../Components/LargeFooter/LargeFooter.jsx";
import Local from "../../Components/Local/Local.jsx";
import * as S from "./home.js";

const Home = () => {
  return (
    <>
      <S.Container>
        <S.Logo>
          <BoxLogo />
        </S.Logo>
        <Local />
        <S.Destaque>
          <S.Grid>
            <Eventos />
            <Favoritos />
            <Conheca />
          </S.Grid>
        </S.Destaque>
        <S.OutroDestaque></S.OutroDestaque>
      </S.Container>
      <LargeFooter />
    </>
  );
};

export default Home;
