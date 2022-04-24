import React from "react";
import * as S from "./card.js";

const Card = (props) => {
  return (
    <S.Card>
      <img src="/assets/imgs/milk-and-honey.jpg" alt="" />
      <p className="title">Milk and Honey</p>
      <p className="writer">Rupi Kaur</p>
    </S.Card>
  );
};

export default Card;
