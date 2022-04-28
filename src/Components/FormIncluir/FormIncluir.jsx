import React, { useState } from "react";
import { api } from "../../Services/Api.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as S from "./FormIncluir.js";

const FormIncluir = () => {
  const [livro, setLivro] = useState({
    imagem: "",
    name: "",
    writer: "",
    description: "",
    publisher: "",
    genre: "",
    price: "",
    year: "",
    language: "",
    pages: "",
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Api = (data) => {
    api
      .post("books", data)
      .then((response) => {
        navigate("/catalogo");
      })
      .catch((erro) => console.log(erro));
  };

  function handleOnChange(e) {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  }

  return (
    <S.Formulario onSubmit={handleSubmit(Api)}>
      <S.Coluna>
        <img
          src={
            !!livro.imagem
              ? livro.imagem
              : "https://hilnethcorreia.com.br/wp-content/uploads/2018/04/livros-1.jpg"
          }
          alt=""
        />
        <fieldset>
          <S.Label htmlFor="imagem" className="label">
            URL
          </S.Label>
          <input
            {...register("imagem", { required: true })}
            onChange={handleOnChange}
            type="text"
            id="imagem"
            className="input"
          />
        </fieldset>
        <fieldset>
          <S.Label htmlFor="editora">Editora</S.Label>
          <input
            {...register("publisher", { required: true })}
            onChange={handleOnChange}
            type="text"
            id="editora"
            className="input"
          />
        </fieldset>
        <fieldset>
          <S.Label htmlFor="genero">Gênero</S.Label>
          <input
            {...register("genre", { required: true })}
            onChange={handleOnChange}
            type="text"
            id="genero"
            className="input"
          />
        </fieldset>
        <fieldset>
          <S.Label htmlFor="paginas">Páginas</S.Label>
          <input
            {...register("page", { required: true })}
            onChange={handleOnChange}
            type="text"
            id="paginas"
            className="input"
          />
        </fieldset>
        <fieldset>
          <S.Label htmlFor="idioma">Idioma</S.Label>
          <input
            {...register("language", { required: true })}
            onChange={handleOnChange}
            type="text"
            id="idioma"
            className="input"
          />
        </fieldset>
        <fieldset>
          <S.Label htmlFor="ano">Ano</S.Label>
          <input
            {...register("year", { required: true })}
            onChange={handleOnChange}
            type="text"
            id="ano"
            className="input"
          />
        </fieldset>
        <fieldset>
          <S.Label htmlFor="preco">Preço</S.Label>
          <input
            {...register("price", { required: true })}
            onChange={handleOnChange}
            type="number"
            id="preco"
            className="input"
          />
        </fieldset>
      </S.Coluna>

      <S.Descricao>
        <S.Caixa>
          <S.Titulo>
            <fieldset>
              <input
                {...register("name", { required: true })}
                onChange={handleOnChange}
                type="text"
                id="titulo"
                className="input"
              />
              <S.Label htmlFor="titulo">Título</S.Label>
            </fieldset>
            <fieldset>
              <input
                register
                {...register("writer", { required: true })}
                onChange={handleOnChange}
                type="text"
                id="autor"
                className="input"
              />
              <S.Label htmlFor="autor">Autor</S.Label>
            </fieldset>
          </S.Titulo>
          <fieldset>
            <textarea
              className="textArea"
              rows="7"
              cols="60"
              {...register("description", { required: true })}
              onChange={handleOnChange}
              type="text"
            />
            <S.Label htmlFor="descrição">Descrição</S.Label>
            <S.Botao type="submit">Pronto</S.Botao>
          </fieldset>
        </S.Caixa>
      </S.Descricao>
    </S.Formulario>
  );
};

export default FormIncluir;
