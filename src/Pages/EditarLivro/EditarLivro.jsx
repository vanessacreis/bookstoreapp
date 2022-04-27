import React from "react";
// import Header from "../../Components/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import FormInfoPubli from "../../Components/FormInfoPubli/FormInfoPubli.jsx";
import * as S from "./EditarLivro.js";
import { api } from "../../Services/Api.js";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditarLivro() {
  const { id } = useParams();
  const [livro, setLivro] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   api.get("books/book/" + id).then((response) => {
  //     console.log(response);
  //     setLivro(response.data.book[0]);
  //   });
  // }, [id]);

  function handleOnChange(e) {
    setLivro({ ...livro, [e.target.name]: e.target.value });
    console.log(livro);
  }
  function handleUpdate() {
    api.put("books/book/" + id, livro).then((response) => {
      console.log(response);
      setLivro(response.data);
      navigate("/");
    });
  }

  return (
    <>
      <S.EditarLivro>
        <FormInfoPubli
          key={id}
          id={id}
          // onChange={handleOnChange}
          // onClick={() => handleUpdate()}
        />
        ;
      </S.EditarLivro>

      <Footer />
    </>
  );
}
