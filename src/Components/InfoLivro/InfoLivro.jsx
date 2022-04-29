import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./InfoLivro.js";

function InfoLivro({ livro, login }) {
  const navigate = useNavigate();

  return (
    <>
      <S.Coluna>
        <img src={livro.imagem} alt="Capa do livro" />
        <S.Publi>
          <p>
            <span className="descri">Editora:</span> {livro.publisher}
          </p>
          <p>
            <span className="descri">Gênero:</span> {livro.genre}
          </p>
          <p>
            <span className="descri">Página:</span> {livro.pages}
          </p>
          <p>
            <span className="descri">Idioma:</span> {livro.language}
          </p>
          <p>
            <span className="descri">Ano:</span> {livro.year}
          </p>
        </S.Publi>
      </S.Coluna>
      <S.Descricao>
        <S.Texto>
          <h1>{livro.name}</h1>
          <h3>{livro.writer}</h3>
          <p>{livro.description}</p>
        </S.Texto>
        {!login ? (
          <S.Reserve>
            <p>R$ {livro.price}</p>
            <button>
              <a href="mailto:livraria@navan.com.br">Reserve</a>
            </button>
          </S.Reserve>
        ) : (
          <button
            onClick={() => navigate(`/editar/${livro.ID_books}`)}
            className="editar"
          >
            Editar
          </button>
        )}
      </S.Descricao>
    </>
  );
}
export default InfoLivro;
