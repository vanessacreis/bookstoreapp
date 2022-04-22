
import styled from "styled-components";
export const Div = styled.div`
background-color: #D9BFA0;
width: 500px;
height:40em;
margin-top: 0px; /* altura que está do topo */
top: 0px; /* altura que vai parar antes do topo */
position: sticky;`
 export const Imagem = styled.img`
width:300px;
position:relative`;
function Div1(){
    return(<Div>
    <Imagem src="https://miro.medium.com/max/1400/0*xRkytAftnlGPo3jK.jpg"/>
    <ul>
        <li>Editora:</li>
        <li>Genero:</li>
        <li>Páginas:</li>
        <li>País:</li>
        <li>Ano:</li>
    </ul>
    </Div>);}
    export default Div1;
