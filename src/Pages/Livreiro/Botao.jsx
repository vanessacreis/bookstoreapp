import React from "react";
import { useNavigate } from "react-router-dom";

const Navegar = () => {
  const navigate = useNavigate();

  return (
    <button className="entrar" onClick={() => navigate("/catalogo")}>
      Entrar
    </button>
  );
};

export default Navegar;
