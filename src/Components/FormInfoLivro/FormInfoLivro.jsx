import React from "react";
import { api } from "../../Services/Api.js";
import { useState } from "react";
import { useForm } from "react-hook-form";

import * as S from "./FormInfoLivro.js";

const FormInfoLivro = () => {
  const [livro, setLivro] = useState();
  console.log(livro);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Api = (data) => {
    api
      .post("books", data)
      .then((response) => {
        // console.log(response.data);
      })
      .catch((erro) => console.log(erro));
  };

  function handleOnChange(e) {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  }
  console.log(handleOnChange);
  // function handlePost(e) {
  //   e.preventDefault();
  //   api.post("books", livro).then((response) => {
  //     setLivro(response.data.book);
  //     console.log(response);
  //   });
  // }
  return (
    <S.Formulario onSubmit={handleSubmit(Api)}>
      <section className="sectionInfoPubli">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <input
          {...register("imagem", { required: true })}
          onChange={handleOnChange}
          placeholder="Título"
          type="text"
        />
        <div>
          <label htmlFor="">Editora</label>
          <input
            {...register("publisher", { required: true })}
            onChange={handleOnChange}
            placeholder="Título"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Gênero</label>
          <input
            {...register("genre", { required: true })}
            onChange={handleOnChange}
            placeholder="Genre"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Páginas</label>
          <input
            {...register("pages", { required: true })}
            onChange={handleOnChange}
            placeholder="Pages"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Idioma</label>
          <input
            {...register("language", { required: true })}
            onChange={handleOnChange}
            placeholder="Título"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Ano</label>
          <input
            {...register("year", { required: true })}
            onChange={handleOnChange}
            placeholder="Título"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Preço</label>
          <input
            {...register("price", { required: true })}
            onChange={handleOnChange}
            placeholder="Título"
            type="number"
          />
        </div>
      </section>

      <section className="sectionInfoLivro">
        <div className="containerInfoLivro">
          <input
            {...register("name", { required: true })}
            onChange={handleOnChange}
            placeholder="Título"
            type="text"
          />
          <label htmlFor="">Título</label>
          <input
            register
            {...register("writer", { required: true })}
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
            {...register("description", { required: true })}
            onChange={handleOnChange}
            placeholder="Título"
            type="text"
          />
          <label htmlFor="">Descrição</label>
        </div>
        <button type="submit">Pronto</button>
      </section>
    </S.Formulario>
  );
};

export default FormInfoLivro;
