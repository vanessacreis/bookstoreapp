import React from "react";
import * as S from "./bannerCarousel.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = () => {
  const settings = {
    dots: true,
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
        <div>
          <img src="/assets/imgs/banner-1.png" alt="" />
        </div>
        <div>
          <img src="/assets/imgs/banner-2.png" alt="" />
        </div>
        <div>
          <img src="/assets/imgs/banner-4.png" alt="" />
        </div>
        <div>
          <img src="/assets/imgs/banner-5.png" alt="" />
        </div>
        <div>
          <img src="/assets/imgs/banner-6.png" alt="" />
        </div>
        <div>
          <img src="/assets/imgs/banner-7.png" alt="" />
        </div>
      </Slider>
    </S.Container>
  );
};

export default BannerCarousel;
