import React from "react";
import * as S from "./index.js"

function Div1({livro}){

    return(<S.ColunaPai>
         <S.Elementos>
        <ul type="">
        <img src={livro.imagem}></img>
        <li>Editora:{livro.Publisher}</li>
        <li>Genero:{livro.Genre}</li>
        <li>Páginas:{livro.Pages}</li>
        <li>Idioma:{livro.Language}</li>
        <li>Ano:{livro.Year}</li>
        </ul>
    </S.Elementos>
    </S.ColunaPai>);}
    export default Div1;
