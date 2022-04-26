import React from "react";
import BotaoPesquisa from "../BotaoCatalogo/BotaoPesquisa.jsx";
import styles from "./Input.module.css";
function Input(props) {
  return (
    <div className={styles.divInput}>
      <input
        onChange={props.onChange}
        className={styles.intupCatalogo}
        type="text"
      />
      <BotaoPesquisa />
    </div>
  );
}

export default Input;
