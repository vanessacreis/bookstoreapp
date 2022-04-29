import React from "react";
import * as S from "./equipe.js";
import Footer from "../../Components/Footer/Footer.jsx";
import EquipeCard from "../../Components/EquipeCard/EquipeCard.jsx";

const Equipe = () => {
  return (
    <>
      <S.Container>
        <div className="cards">
          <div className="cima">
            <EquipeCard
              nome="Bruno Sá"
              cargo="Supervisor de logística e dev fullstack"
              imagem="/assets/imgs/Icon-Bruno.jpg"
            />
            <EquipeCard
              nome="Luziane Gering"
              cargo="Estoquista e desenvolvedora front-end"
              imagem="/assets/imgs/Icon-Luzi.jpeg"
            />
            <EquipeCard
              nome="Pedro Santos"
              cargo="Lorem ipsum dolor sit amet"
              imagem="/assets/imgs/Icon-Pedro.png"
            />
          </div>
          <div className="baixo">
            <EquipeCard
              nome="Thiago Pereira"
              cargo="Vendedor e dev fullstack"
              imagem="/assets/imgs/Icon-Thiago.jpeg"
            />
            <EquipeCard
              nome="Vanessa Reis"
              cargo="Gerente e desenvolvedora front-end"
              imagem="/assets/imgs/Icon-Van.jpeg"
            />
          </div>
        </div>
        <div className="logo">
          <img src="/assets/imgs/livraria-vermelho.svg" alt="" />
          <p>Conheça nosso time</p>
        </div>
      </S.Container>
      <Footer />
    </>
  );
};

export default Equipe;
