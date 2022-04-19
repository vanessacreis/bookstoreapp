import React from "react";
import styles from "../BotaoCatalogo/Botao.module.css";
function Botao() {
  return (
    <div>
      <button className={styles.Botao}>
        <img src="/assets/icons/book-search.svg" alt="" className="iconRedes" />
      </button>
    </div>
  );
}

export default Botao;
