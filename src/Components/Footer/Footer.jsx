import React from "react";
import * as S from "./footer.js";

const Footer = () => {
  return (
    <S.Footer>
      <S.Copyright>
        <img src="/assets/icons/minicon.png" alt="" />
        <p className="logo">Livraria na Van </p>
        <p>&copy; Todos os direitos reservados</p>
      </S.Copyright>
      <S.Redes>
        <img src="/assets/icons/instagram.svg" alt="Logo do Instagram" />
        <img src="/assets/icons/twitter.svg" alt="Logo do Twitter" />
        <img src="/assets/icons/facebook.svg" alt="Logo do Facebook" />
      </S.Redes>
    </S.Footer>
  );
};

export default Footer;
