import React from "react";
import Input from "../../Components/InputCatalogo/Input.jsx";
import ExibirLivros from "../../Components/ExibicaoLivros/ExibirLivros.jsx";
import BotaoVerMais from "../../Components/BotaoVerMais/BotaoVerMais.jsx";
import LargeFooter from "../../Components/LargeFooter/LargeFooter.jsx";

function Catalogo() {
  return (
    <div>
      <Input />
      <ExibirLivros />
      <BotaoVerMais />
      <LargeFooter />
    </div>
  );
}

export default Catalogo;
