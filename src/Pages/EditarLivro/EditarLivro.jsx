import React from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import * as S from "./EditarLivro.js";
import { useParams } from "react-router-dom";
import FormEditar from "../../Components/FormEditar/FormEditar.jsx";

export default function EditarLivro() {
  const { id } = useParams();

  return (
    <>
      <S.EditarLivro>
        <FormEditar id={id} />;
      </S.EditarLivro>
      <Footer />
    </>
  );
}
