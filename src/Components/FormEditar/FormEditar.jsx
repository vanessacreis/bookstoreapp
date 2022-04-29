import React, { useState, useEffect } from "react";
import { api } from "../../Services/Api.js";
import { useNavigate } from "react-router-dom";
import * as S from "./FormEditar.js";

const FormEditar = ({ id }) => {
  const [livro, setLivro] = useState({});
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("books/book/" + id)
      .then((response) => {
        setLivro(response.data.book[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleUpdate(e) {
    e.preventDefault();
    console.log(livro);
    api
      .put("books/book/" + id, livro)
      .then((response) => {
        console.log(response);
        navigate(`/info/${id}`);

        setLoad(!load);
      })
      .catch((err) => console.log(err));
  }

  function handleDelete(e) {
    e.preventDefault();

    api
      .delete("books/book/" + id, livro)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  function handleOnChange(e) {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  }

  return (
    <S.Formulario>
      <S.Coluna>
        <img src={livro.imagem} alt="" />
        <fieldset>
          <S.Label htmlFor="imagem" className="label">
            URL
          </S.Label>
          <input
            name="imagem"
            value={livro.imagem}
            onChange={handleOnChange}
            type="text"
            className="input"
          />
        </fieldset>
        <fieldset>
          <S.Label htmlFor="">Editora</S.Label>
          <input
            name="publisher"
            value={livro.publisher}
            onChange={handleOnChange}
            type="text"
            className="input"
          />
        </fieldset>
        <fieldset>
          <S.Label htmlFor="">Gênero</S.Label>
          <input
            name="genre"
            value={livro.genre}
            onChange={handleOnChange}
            type="text"
            className="input"
          />
        </fieldset>
        <fieldset>
          <S.Label htmlFor="">Páginas</S.Label>
          <input
            name="pages"
            value={livro.pages}
            onChange={handleOnChange}
            type="text"
            className="input"
          />
        </fieldset>
        <fieldset>
          <S.Label htmlFor="">Idioma</S.Label>
          <input
            name="language"
            value={livro.language}
            onChange={handleOnChange}
            type="text"
            className="input"
          />
        </fieldset>
        <fieldset>
          <S.Label htmlFor="">Ano</S.Label>
          <input
            name="year"
            value={livro.year}
            onChange={handleOnChange}
            type="text"
            className="input"
          />
        </fieldset>
        <fieldset>
          <S.Label htmlFor="">Preço</S.Label>
          <input
            name="price"
            value={livro.price}
            onChange={handleOnChange}
            type="number"
            className="input"
          />
        </fieldset>
      </S.Coluna>

      <S.Descricao>
        <S.Caixa>
          <S.Titulo>
            <input
              name="name"
              value={livro.name}
              onChange={handleOnChange}
              type="text"
              className="input"
            />
            <S.Label htmlFor="">Título</S.Label>
            <input
              name="writer"
              value={livro.writer}
              onChange={handleOnChange}
              type="text"
              className="input"
            />
            <S.Label htmlFor="">Autor</S.Label>
          </S.Titulo>
          <fieldset>
            <textarea
              className="textArea"
              rows="7"
              cols="60"
              name="description"
              value={livro.description}
              onChange={handleOnChange}
              type="text"
            />
            <S.Label htmlFor="">Descrição</S.Label>
            <div className="divBtn">
              <S.Botao onClick={handleDelete}>Excluir</S.Botao>
              <S.Botao onClick={handleUpdate}>Pronto</S.Botao>
            </div>
          </fieldset>
        </S.Caixa>
      </S.Descricao>
    </S.Formulario>
  );
};

export default FormEditar;
