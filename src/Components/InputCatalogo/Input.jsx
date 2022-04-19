import React from "react";
import BotaoPesquisa from "../BotaoCatalogo/BotaoPesquisa.jsx";
import styles from "./Input.module.css";
function Input() {
  return (
    <div className={styles.divInput}>
      <input className={styles.intupCatalogo} type="text" />
      <BotaoPesquisa />
    </div>
  );
}

export default Input;
