import React from "react";
import * as S from "./index.js";
function Div2 ({livro}){

    return(
        <S.Pai>
            <div className="org1">
<S.InformacoesLivro>
    <h1>{livro.Name}</h1>
    <h3>{livro.Writer}</h3>
    <p>{livro.Description}</p>
    <div>
        <p>R$ {livro.Price}</p>
        <button>Reserve!</button></div>
    </S.InformacoesLivro>
    </div>
    
    <div className="org2">
    <S.AreaDoLivreiro>
        <h2>Funcionalidades para livreiros</h2>
        <p></p>
        <S.Buttons>Excluir</S.Buttons> <S.Buttons>Editar</S.Buttons>
    </S.AreaDoLivreiro>
    </div></S.Pai>
);
}
export default Div2;