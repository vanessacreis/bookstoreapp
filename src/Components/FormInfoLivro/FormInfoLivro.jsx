import React from "react";
import Input from "../Input/Input.jsx";
import * as S from "./FormInfoLivro.js";
import { useState } from "react";

const FormInfoLivro = ({ livros }) => {
  const [livro, setLivro] = useState([]);
  console.log(livro);

  function handleOnChange(e) {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  }
  return (
    <S.Formulario>
      <div>
        <Input
          name="Name"
          value={livros.Name}
          onChange={handleOnChange}
          placeholder="Título"
          type="text"
        />
        <label htmlFor="">Título</label>

        <Input
          name="Writer"
          value={livros.Writer}
          onChange={handleOnChange}
          placeholder="Título"
          type="text"
        />
        <label htmlFor="">Autor</label>
      </div>
      <div className="divTextArea">
        <textarea
          className="textArea"
          rows="7"
          cols="60"
          name="Description"
          value={livros.Description}
          onChange={handleOnChange}
          placeholder="Título"
          type="text"
        />
        <label htmlFor="">Descrição</label>
      </div>
      <button>Pronto</button>
    </S.Formulario>
  );
};

export default FormInfoLivro;
