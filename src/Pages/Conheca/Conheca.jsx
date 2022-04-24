import React from "react";
import Carousel from "../../Components/Carousel/Carousel.jsx";
import LargeFooter from "../../Components/LargeFooter/LargeFooter.jsx";
import * as S from "./conheca.js";

const Conheca = () => {
  return (
    <>
      <S.Container>
        <S.Historia>
          <Carousel />
          
        </S.Historia>
      </S.Container>
      <LargeFooter />
    </>
  );
};

export default Conheca;
