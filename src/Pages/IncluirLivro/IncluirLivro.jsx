import React from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import FormIncluir from "../../Components/FormIncluir/FormIncluir.jsx";
import * as S from "../EditarLivro/EditarLivro.js";

export default function IncluirLivro() {
  return (
    <>
      <S.EditarLivro>
        <FormIncluir />
      </S.EditarLivro>
      <Footer />
    </>
  );
}
