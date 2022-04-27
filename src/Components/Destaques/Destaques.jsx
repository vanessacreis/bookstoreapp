import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../Services/Api.js";
import Card from "../CardDestaque/Card.jsx";
import * as S from "./destaques.js";

const Destaques = () => {
  const [livros, setLivros] = useState([]);
  useEffect(() => {
    api.get("/books").then((response) => {
      setLivros(response.data.books);
    });
  }, []);

  const getRandom = (arr, nr) =>
    arr
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, nr);

  return (
    <S.Destaque>
      <h1>Destaques</h1>
      <div>
        {getRandom(livros, 4).map((livro) => {
          return (
            <Link
              key={livro.ID_books}
              to={`/info/${livro.ID_books}`}
              className="link"
            >
              <Card
                imagem={livro.imagem}
                name={livro.name}
                writer={livro.writer}
              />
            </Link>
          );
        })}
      </div>
    </S.Destaque>
  );
};

export default Destaques;
