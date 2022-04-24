import React from "react";
import { useState, useEffect } from "react";
import { api } from "../../Services/Api.js";
import styles from "./ExibirLivros.module.css";

function ExibirLivros() {
  const [livro, setLivro] = useState([]);
  useEffect(() => {
    api.get("/books").then((response) => {
      setLivro(response.data.books);
      console.log(livro);
    });
  });
  return (
    <section className={styles.conteudo__principal}>
      {livro.map((item) => {
        return (
          <div className={styles.card}>
            <img src={item.imagem} alt="" />
            <p>{item.Name}</p>
          </div>
        );
      })}
    </section>
  );
}

export default ExibirLivros;
