import styled from "styled-components";
import { colors } from "../../Style/globalStyle";

export const Formulario = styled.form`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  background-color: ${colors.contrast};
  img {
    opacity: 50%;
    display: flex;
    align-self: center;
  }
  div {
    display: flex;
    align-items: center;
    width: 100%;
  }
  label {
    width: 75px;
    font-family: ${colors.text};
  }
`;
