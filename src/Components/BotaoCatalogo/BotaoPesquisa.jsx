import React from "react";
import styles from "../BotaoCatalogo/Botao.module.css";
function Botao() {
  return (
    <div>
      <button className={styles.botao}>
        <img src="/assets/icons/book-search.svg" alt="" />
      </button>
    </div>
  );
}

export default Botao;
