import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Container = styled.main`
  width: 100%;
  height: auto;
  min-height: 180vh;
  background-image: url(/assets/imgs/bg-catalogo.png);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Caixa = styled.div`
  width: 90%;
  height: 90%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 10px;
  background-color: ${colors.white}98;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Catalogo = styled.div`
  width: 85%;
`;

export const Grid = styled.div`
  width: 85%;
  min-height: 150vh;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 33.33% 33.33% 33.33%;
  grid-row-gap: 2%;
  margin-top: 7%;

  .link {
    text-decoration: none;
  }
`;
