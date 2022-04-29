import React from "react";
import Carousel from "../../Components/Carousel/Carousel.jsx";
import LargeFooter from "../../Components/LargeFooter/LargeFooter.jsx";
import Mapa from "../../Components/Mapa/Mapa.jsx";
import Newsletter from "../../Components/Newsletter/Newsletter.jsx";
import * as S from "./conheca.js";

const Conheca = () => {
  return (
    <>
      <S.Container>
        <S.Historia>
          <Carousel />
          <p>
            Um grupo de amigos apaixonado por literatura e viagens decidiu
            abandonar a vida rotineira de escritório na cidade de São Paulo e
            atravessar o país levando cultura para todos os cantos. Movidos por
            esse desejo, juntaram as economias, compraram e reformaram uma van e
            assim, em 2019 nasceu a <span className="nome">Livraria na Van</span>. <br />
            Mais do que uma livraria,uma experiência cultural conduzida pelas
            palavras e que atravessa a malha rodoviária do Brasil, levando
            literatura, arte e cultura para todos. Cidades grandes e pequenas,
            litoral, interior, cerrado, floresta, selva de pedra. Nossa meta é
            deixar a marca dos nossos pneus por aí e levar o amor pela
            literatura a todos que ainda não tiveram o prazer de ser tocado pelo
            poder das palavras.
          </p>
          <S.divRota />
        </S.Historia>
        <S.Viagem>
          <Newsletter />
          <S.Mapa>
            <h1>Veja por onde já passamos</h1>
            <p>hic nesciunt pariatur iusto eos sit sint ipsam nemo laborum.</p>
            <Mapa />
          </S.Mapa>
        </S.Viagem>
      </S.Container>
      <LargeFooter />
    </>
  );
};

export default Conheca;
