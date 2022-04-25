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
      <h1 className="user-login__title">
        LOGO DA <br></br> LIVRARIA
      </h1>
      <form autoComplete="nope">
        <div className="user-login__form-control">
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
        <div className="user-login__form-control">
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
    </div>
  );
};

export default UserLogin;
