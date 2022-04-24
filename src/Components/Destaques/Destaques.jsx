import React from "react";
import Card from "../CardDestaque/Card.jsx";
import * as S from "./destaques.js";

const Destaques = () => {
  return (
    <S.Destaque>
      <h1>Destaques</h1>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </S.Destaque>
  );
};

export default Destaques;
