import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./conheca.js";

const Conheca = () => {
  return (
    <S.Conheca>
      <img src="./assets/imgs/BookTruckquad.jpg" alt="" />
      <S.Texto>
        <h3>Conheça-nos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias vel
          cupiditate corrupti, praesentium tenetur deserunt. orem ipsum dolor
          sit amet consectetur, adipisicing elit. Alias vel cupiditate corrupti,
          praesentium tenetur deserunt. orem ipsum dolor sit amet consectetur,
          adipisicing elit. Alias vel cupiditate corrupti, praesentium tenetur
          deserunt.
        </p>
      </S.Texto>
    </S.Conheca>
  );
};

export default Conheca;
