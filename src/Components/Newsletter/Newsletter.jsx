import React from "react";
import * as S from "./newsletter.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const notify = () => toast("Deu certo, parabéns");

  return (
    <S.News>
      <h1>Quer acompanhar a gente nessa viagem?</h1>
      <p>
        Se inscreva na nossa newsletter e receba todas as nossas novidades.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
        sapiente? Quas, natus atque id nisi doloremque ab repellat consequuntur
      </p>
      <S.Form>
        <input type="text" placeholder="Digite seu nome" />
        <input type="text" placeholder="Digite seu email" />
        <div className="checkbox">
          <input
            type="checkbox"
            id="subscribeNews"
            name="subscribe"
            value="newsletter"
          />
          <label htmlFor="subscribeNews">
            Receber notícias e informações de Livraria na Van?
          </label>
        </div>
        <button type="reset" onClick={notify}>
          Inscrever
        </button>
        <ToastContainer/>
      </S.Form>
    </S.News>
  );
};

export default Newsletter;
