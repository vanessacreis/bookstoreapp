import { useState } from "react";
import React from "react";
import "./Livreiro.css";

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
    <div className="user-login">
      <h1 className="user-login__title">Logo da Livraria</h1>
      <form autoComplete="nope">
        <div className="user-login__form-control">
          <label htmlFor="nomeCargo">Cargo</label>
          <input
            id="nomeCargo"
            type="text"
            name="nomeDoCargo"
            autoComplete="off"
            onChange={onChange}
            value={values.nomeCargo}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="matricula">Matrícula</label>
          <input
            id="matricula"
            type="text"
            name="matricula"
            onChange={onChange}
            value={values.matricula}
          />
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
