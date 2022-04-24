import React, { useRef } from "react";
import * as S from "./carousel.js";

const Carousel = () => {
  const carousel = useRef(null);
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <S.Container>
      <S.Carousel ref={carousel}>
        <div className="pic">
          <img src="/assets/imgs/carousel (1).jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel (2).jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel (3).jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel (4).jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel (5).jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel (6).jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel (7).jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel (8).jpg" alt="" />
        </div>
      </S.Carousel>
      <S.Buttons>
        <button onClick={handleLeftClick}>
          <img src="/assets/icons/chevron-left.svg" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/assets/icons/chevron-right.svg" alt="Scroll Right" />
        </button>
      </S.Buttons>
    </S.Container>
  );
};

export default Carousel;
