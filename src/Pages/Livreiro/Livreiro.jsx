import React, { useState, Component } from "react";
import styles from "./Livreiro.module.css";
import Navegar from "./Botao";

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
          <label className="nomeCargo">
            Escolha seu cargo: <br />
            <select>
              <option value="estoquista">Estoquista</option>
              <option value="gerente">Gerente</option>
              <option value="livreiro">Livreiro</option>
            </select>
          </label>
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
      <Navegar />
    </div>
  );
};

export default UserLogin;
