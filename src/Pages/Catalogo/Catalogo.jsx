import React, { useEffect, useState } from "react";
import Input from "../../Components/InputCatalogo/Input.jsx";
import { api } from "../../Services/Api.js";
import ExibirLivros from "../../Components/ExibicaoLivros/ExibirLivros.jsx";
import BotaoVerMais from "../../Components/BotaoVerMais/BotaoVerMais.jsx";
import LargeFooter from "../../Components/LargeFooter/LargeFooter.jsx";
import * as S from "./catalogo.js";

function Catalogo() {
  const [livro, setLivro] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    api.get("/books").then((response) => {
      setLivro(response.data.books);
      console.log(livro);
    });
  }, []);
  return (
    <S.Conteiner>
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
            } else if (item.Name.toLowerCase().includes(input.toLowerCase())) {
              return item;
            }
          })
          .map((item) => {
            return (
              <ExibirLivros
                key={item.ID_Name}
                imagem={item.imagem}
                Name={item.Name}
                Writer={item.Writer}
              />
            );
          })}
      </S.Grid>
      <BotaoVerMais />
      <LargeFooter />
    </S.Conteiner>
  );
}

export default Catalogo;
