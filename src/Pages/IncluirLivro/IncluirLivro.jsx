import React from "react";
// import Header from "../../Components/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import FormInfoLivro from "../../Components/FormInfoLivro/FormInfoLivro.jsx";
import * as S from "../EditarLivro/EditarLivro.js";

export default function IncluirLivro() {
  return (
    <>
      <S.EditarLivro>
        <FormInfoLivro />;
      </S.EditarLivro>

      <Footer />
    </>
  );
}
