import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Container = styled.main`
  width: 100%;
  min-height: 200vh;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${colors.text};
`;

export const Historia = styled.section`
  width: 80%;
  height: 100vh;
`;
