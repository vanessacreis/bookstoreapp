import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";
export const Pai = styled.div`display: grid;
padding: 0px 0px 0px; bottom: 0px; margin-right: 3%;
    >.org2 {
        display: grid; align-content: center; 
        justify-content: center }
    >.org1 {
        background-color: rgba(20, 33, 38, 0.011);}`
export const InformacoesLivro = styled.div`
width: 100%; display: grid; padding: 5% 0px 0px 3%; 
text-align: justify; background-color: rgba(20, 33, 38, 0.02);
    > h1{
        font-size: 7vh; font-family: ${colors.titles};
        color: ${colors.blue}
    }
    > h3{
        font-family: ${colors.titles};
        font-size: 3vh;
    }
    > p{
        font-family: ${colors.text}; 
        margin-right: 20%;
        font-size: 3vh;}
    > button{
    margin-top: 2%; width: 24vh; height: 6vh;
    font-family: ${colors.text}; background-color: #D9BFA0;
    border: none; border-radius: 25px;
    font-size: 2.7vh
}`;
export const AreaDoLivreiro = styled.div`
text-align: center; padding: 0px;  height: 20vh;
background-color: rgba(217, 191, 160, 0.07); display: block;
>h2{font-family: ${colors.titles}; color: ${colors.orange}; 
display: grid; align-content: start; margin-top: -0px;
font-size:4vh}
>.org2{
    display: flex; flex-direction: row; justify-content: space-between; margin-top: 5%;
}
`;
export const Buttons = styled.button`
font-family: ${colors.text}; background-color:rgba(20, 33, 38, 0.08);
border: none; border-radius: 25px;
font-size: 2.7vh;  width: 24vh; height: 6vh; margin-top: 4%;
`