import React from "react";
import BoxLogo from "../../Components/BoxLogo/BoxLogo.jsx";
import Conheca from "../../Components/Conheça/Conheca.jsx";
import Destaques from "../../Components/Destaques/Destaques.jsx";
import LargeFooter from "../../Components/LargeFooter/LargeFooter.jsx";
import Local from "../../Components/Local/Local.jsx";
import * as S from "./home.js";
import { frases } from "../../Data/frases.js";

const Home = () => {
  const randomNum = Math.floor(Math.random() * frases.length);

  return (
    <>
      <S.Container>
        <S.Logo>
          <BoxLogo />
        </S.Logo>
        <Local />
        <S.Vitrine>
          <S.Frase>
            {frases[randomNum].frase} –
            <span className="autor">{frases[randomNum].autor}</span>
          </S.Frase>
          <Destaques />
          <S.Banners>
            <div className="banner1"></div>
            <div className="banner2"></div>
          </S.Banners>
        </S.Vitrine>
        <Conheca />
      </S.Container>
      <LargeFooter />
    </>
  );
};

export default Home;
