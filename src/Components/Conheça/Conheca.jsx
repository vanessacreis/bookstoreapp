import React from "react";
import { Link } from "react-router-dom";
import * as S from "./conheca.js";

const Conheca = () => {
  return (
    <S.Conheca>
      <img src="./assets/imgs/BookTruck.svg" alt="" />
      <S.Texto>
        <h3>Conheça-nos</h3>
        <p>
          Mais do que uma livraria,uma experiência cultural conduzida pelas
          palavras e que atravessa a malha rodoviária do Brasil, levando
          literatura, arte e cultura para todos. <br />
          <Link to="/conheca">Clique aqui e saiba mais</Link>.
        </p>
      </S.Texto>
    </S.Conheca>
  );
};

export default Conheca;
