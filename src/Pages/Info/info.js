import styled from "styled-components";
import { colors } from "../../Style/globalStyle";

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 125px);
  display: flex;
  justify-content: space-between;
  background-image: url(/assets/imgs/BG-Livros.svg);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  font-family: ${colors.text};
`;
