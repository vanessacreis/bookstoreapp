import styled from "styled-components";
import { colors } from "../../Style/globalStyle";

export const Conteiner = styled.main`
  width: 100%;
  height: auto;
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  width: 80%;
  min-height: 150vh;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 33.33% 33.33% 33.33%;
  grid-row-gap: 3rem;
  margin-top: 7%;
`;
