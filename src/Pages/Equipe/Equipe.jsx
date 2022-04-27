import React from "react";
import EquipeCard from "../../Components/EquipeCard/EquipeCard.jsx";
import * as S from "./equipe.js";

const Equipe = () => {
  return (
    <S.Container>
      <div className="cards">
        <div className="cima">
          <EquipeCard
            nome="Bruno Sá"
            cargo="Lorem ipsum dolor sit amet"
            imagem="/assets/imgs/Icon-Bruno.jpg"
          />
          <EquipeCard nome="Luziane" cargo="Lorem ipsum dolor sit amet" />
          <EquipeCard
            nome="Pedro Silva"
            cargo="Lorem ipsum dolor sit amet"
            imagem="/assets/imgs/Icon-Pedro.png"
          />
        </div>
        <div className="baixo">
          <EquipeCard
            nome="Thiago Pereira"
            cargo="Lorem ipsum dolor sit amet"
          />
          <EquipeCard
            nome="Vanessa Reis"
            cargo="Lorem ipsum dolor sit amet"
            imagem="/assets/imgs/Icon-Van.jpeg"
          />
        </div>
      </div>
      <div className="logo">
        <img src="/assets/imgs/livraria-vermelho.svg" alt="" />
        <p>Conheça nosso time</p>
      </div>
    </S.Container>
  );
};

export default Equipe;
