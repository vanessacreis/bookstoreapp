import React from "react";
import * as S from "./carousel.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Container>
      <Slider {...settings}>
        <div className="pic">
          <img src="/assets/imgs/carousel-1.jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel-2.jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel-3.jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel-4.jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel-5.jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel-6.jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel-7.jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel-8.jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel-9.jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel-10.jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel-11.jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel-12.jpg" alt="" />
        </div>
        <div className="pic">
          <img src="/assets/imgs/carousel-13.jpg" alt="" />
        </div>
      </Slider>
    </S.Container>
  );
};

export default Carousel;
