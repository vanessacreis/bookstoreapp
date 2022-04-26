import React from "react";
// import Header from "../../Components/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import FormInfoLivro from "../../Components/FormInfoLivro/FormInfoLivro.jsx";
import FormInfoPubli from "../../Components/FormInfoPubli/FormInfoPubli.jsx";
import * as S from "./EditarLivro";
import { api } from "../../Services/Api.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditarLivro() {
  const { id } = useParams();
  const [livro, setLivro] = useState([]);
  console.log(livro);
  useEffect(() => {
    api.get("books/book/" + id).then((response) => {
      console.log(response);
      setLivro(response.data.book[0]);
    });
  }, [id]);

  return (
    <>
      <S.EditarLivro>
        <FormInfoPubli />
        <FormInfoLivro key={id} livros={livro} />;
      </S.EditarLivro>

      <Footer />
    </>
  );
}
