import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";
export const Pai = styled.div`display: grid;
padding: 0px 0px 0px; bottom: 0px; 
>.org2 {display: grid; align-content: center; justify-content: center }
>.org1 {background-color: rgba(20, 33, 38, 0.011); z-index: -1; position: relative}`
export const InformacoesLivro = styled.div`width: 85%; 
display: grid; padding: 5% 0px 0px 3%; text-align: justify;
> h1{font-size: 40px; font-family: ${colors.titles}}
> h3{font-family: ${colors.titles}}
> p{font-family: ${colors.text}}
> button{margin-left: 40%; margin-top: 2%; width: 200px; font-family: ${colors.text}}`;
export const AreaDoLivreiro = styled.div`text-align: center; padding: 20px;
 background-color: #FCFCFC;
>h2{font-family: ${colors.titles}}
>button{font-family: ${colors.text}}
`
