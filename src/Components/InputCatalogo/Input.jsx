import React from "react";
import Botao from "../BotaoCatalogo/BotaoPesquisa.jsx";
import styles from "./Input.module.css";
function Input() {
  return (
    <div className={styles.divInput}>
      <input className={styles.intupCatalogo} type="text" />
      <Botao />
    </div>
  );
}

export default Input;
