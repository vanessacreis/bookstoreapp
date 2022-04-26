import { useState } from "react";
import React from "react";
import styles from "./Livreiro.module.css";
import entrar from "./Botao";

function initialState() {
  return { user: "", password: "" };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <div className={styles.userLogin}>
      <h1 className={styles.userLoginTitle}>
        LOGO DA <br></br>LIVRARIA
      </h1>
      <form autoComplete="nope">
        <div className={styles.userLoginFormControl}>
          <input
            id="nomeCargo"
            type="text"
            name="nomeDoCargo"
            autoComplete="off"
            onChange={onChange}
            value={values.nomeCargo}
          />
          <label htmlFor="nomeCargo">Cargo</label>
        </div>
        <div className={styles.userLoginFormControl}>
          <input
            id="matricula"
            type="text"
            name="matricula"
            onChange={onChange}
            value={values.matricula}
          />
          <label htmlFor="matricula">Matrícula</label>
        </div>
      </form>
      <button className={styles.entrar} onClick={entrar}>
        Entrar
      </button>
    </div>
  );
};

export default UserLogin;
