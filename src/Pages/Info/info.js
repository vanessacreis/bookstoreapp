import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 125px);
  display: flex;
  justify-content: space-between;
  font-family: ${colors.text};
`;
