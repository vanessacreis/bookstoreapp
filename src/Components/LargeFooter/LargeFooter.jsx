import React from "react";
import * as S from "./largeFooter.js";

const LargeFooter = () => {
  return (
    <S.Footer>
      <S.Redes>
        <p>
          <img src="/assets/icons/instagram.svg" alt="" className="iconRedes" />
          @InstadaLivraria
        </p>
        <p>
          <img src="/assets/icons/twitter.svg" alt="" className="iconRedes" />
          @TTDaLivraria
        </p>
        <p>
          <img src="/assets/icons/facebook.svg" alt="" className="iconRedes" />
          @FBDaLivraria
        </p>
      </S.Redes>
      <hr className="separador" />
      <S.Copyright>
        <div>
          <img src="/assets/icons/minicon.png" alt="" />
          <p>Livraria na Van</p>
        </div>
        <p>&copy; Todos os direitos reservados</p>
      </S.Copyright>
    </S.Footer>
  );
};

export default LargeFooter;
