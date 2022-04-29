import React, { useEffect, useState } from "react";
import Input from "../../Components/InputCatalogo/Input.jsx";
import { api } from "../../Services/Api.js";
import ExibirLivros from "../../Components/ExibirLivros/ExibirLivros.jsx";
import BotaoVerMais from "../../Components/BotaoVerMais/BotaoVerMais.jsx";
import LargeFooter from "../../Components/LargeFooter/LargeFooter.jsx";
import * as S from "./catalogo.js";
import { Link } from "react-router-dom";

function Catalogo() {
  const [livro, setLivro] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    api.get("/books").then((response) => {
      setLivro(response.data.books);
      console.log(livro);
    });
  }, [livro]);

  return (
    <>
      <S.Container>
        <S.Caixa>
          <Input
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <S.Grid>
            {livro
              .filter((item) => {
                if (input === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(input.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <Link
                    key={item.ID_books}
                    to={`/info/${item.ID_books}`}
                    className="link"
                  >
                    <ExibirLivros
                      imagem={item.imagem}
                      name={item.name}
                      writer={item.writer}
                    />
                  </Link>
                );
              })}
          </S.Grid>
        </S.Caixa>
      </S.Container>
      <LargeFooter />
    </>
  );
}

export default Catalogo;
