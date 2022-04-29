import React from "react";
import * as S from "./carousel.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <S.Container>
      <Slider {...settings}>
        <div>
          <img src="/assets/imgs/carousel-1.jpg" alt="Imagem do carrossel" />
        </div>
        <div>
          <img src="/assets/imgs/carousel-2.jpg" alt="Imagem do carrossel" />
        </div>
        <div>
          <img src="/assets/imgs/carousel-3.jpg" alt="Imagem do carrossel" />
        </div>
        <div>
          <img src="/assets/imgs/carousel-4.jpg" alt="Imagem do carrossel" />
        </div>
        <div>
          <img src="/assets/imgs/carousel-5.jpg" alt="Imagem do carrossel" />
        </div>
        <div>
          <img src="/assets/imgs/carousel-6.jpg" alt="Imagem do carrossel" />
        </div>
        <div>
          <img src="/assets/imgs/carousel-7.jpg" alt="Imagem do carrossel" />
        </div>
        <div>
          <img src="/assets/imgs/carousel-8.jpg" alt="Imagem do carrossel" />
        </div>
        <div>
          <img src="/assets/imgs/carousel-9.jpg" alt="Imagem do carrossel" />
        </div>
        <div>
          <img src="/assets/imgs/carousel-10.jpg" alt="Imagem do carrossel" />
        </div>
        <div>
          <img src="/assets/imgs/carousel-11.jpg" alt="Imagem do carrossel" />
        </div>
        <div>
          <img src="/assets/imgs/carousel-12.jpg" alt="Imagem do carrossel" />
        </div>
        <div>
          <img src="/assets/imgs/carousel-13.jpg" alt="Imagem do carrossel" />
        </div>
      </Slider>
    </S.Container>
  );
};

export default Carousel;
