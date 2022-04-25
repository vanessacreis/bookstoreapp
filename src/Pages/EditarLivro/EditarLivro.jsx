import React from "react";
// import Header from "../../Components/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Formulario from "../../Components/Formulario/Formulario.jsx";
import FormularioSecundario from "../../Components/FormularioSecundario/FormularioSecundario.jsx";
import * as S from "./EditarLivro";

export default function EditarLivro() {
  return (
    <S.EditarLivro>
      <FormularioSecundario />
      <Formulario />
      <Footer />
    </S.EditarLivro>
  );
}
