import React from "react";
import styles from "./Equipe.module.css";

const Cards = () => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} alt="Foto-Pedro" />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>Pedro Santos</h5>
        <p className={styles.cardText}>
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
    </div>
  );
};

export default Cards;
