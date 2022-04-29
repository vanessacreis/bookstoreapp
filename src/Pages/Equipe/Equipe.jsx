import React from "react";
import { Link } from "react-router-dom";
import * as S from "./equipe.js";
import Footer from "../../Components/Footer/Footer.jsx";
import EquipeCard from "../../Components/EquipeCard/EquipeCard.jsx";

const Equipe = () => {
  return (
    <>
      <S.Container>
        <div className="cards">
          <div className="cima">
            <a href="https://www.linkedin.com/in/brunoasantanadesa/">
              <EquipeCard
                nome="Bruno Sá"
                cargo="Supervisor de logística e dev fullstack"
                imagem="/assets/imgs/Icon-Bruno.jpg"
              />
            </a>
            <a href="https://www.linkedin.com/in/luziane-gering-729ba7180/">
              <EquipeCard
                nome="Luziane Gering"
                cargo="Estoquista e dev front-end"
                imagem="/assets/imgs/Icon-Luzi.jpeg"
              />
            </a>
            <a href="https://www.linkedin.com/in/pedro-santos20/">
              <EquipeCard
                nome="Pedro Santos"
                cargo="Livreiro e dev front-end"
                imagem="/assets/imgs/Icon-Pedro.png"
              />
            </a>
          </div>
          <div className="baixo">
            <a href="https://www.linkedin.com/in/thiago-pgc/">
              <EquipeCard
                nome="Thiago Pereira"
                cargo="Vendedor e dev fullstack"
                imagem="/assets/imgs/Icon-Thiago.jpeg"
              />
            </a>
            <a href="https://www.linkedin.com/in/vanessacreisbh/">
              <EquipeCard
                nome="Vanessa Reis"
                cargo="Gerente e dev front-end"
                imagem="/assets/imgs/Icon-Van.jpeg"
              />
            </a>
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
