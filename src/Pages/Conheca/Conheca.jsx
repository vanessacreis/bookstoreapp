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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
            sapiente? Quas, natus atque id nisi doloremque ab repellat
            consequuntur iste, hic nesciunt pariatur iusto eos sit sint ipsam
            nemo laborum. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Optio, sapiente? Quas, natus atque id nisi doloremque ab
            repellat consequuntur iste, hic nesciunt pariatur iusto eos sit sint
            ipsam nemo laborum. <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
            sapiente? Quas, natus atque id nisi doloremque ab repellat
            consequuntur iste, hic nesciunt pariatur iusto eos sit sint ipsam
            nemo laborum. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Optio, sapiente? Quas, natus atque id nisi doloremque ab
            repellat consequuntur iste, hic nesciunt pariatur iusto eos sit sint
            ipsam nemo laborum.
          </p>
        </S.Historia>
      </S.Container>
      <LargeFooter />
    </>
  );
};

export default Conheca;
