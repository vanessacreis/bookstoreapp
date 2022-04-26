import styled from "styled-components";
import { colors } from "../../Style/globalStyle";

export const Formulario = styled.form`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  font-family: ${colors.text};

  .divTextArea {
    display: flex;
    flex-direction: column;
  }
  .textArea {
    width: 80%;
    color: ${colors.black};
    font-family: ${colors.text};
    background-color: transparent;
    padding: 10px;
    font-size: 15px;
    border: solid 1px ${colors.black};
    border-radius: 5px;
  }
  button {
    height: 50px;
    width: 125px;
    border-radius: 10px;
    background-color: ${colors.contrast};
    align-self: flex-end;
    margin-right: 170px;
    border-style: none;
    box-shadow: 2px 2px 5px;
    cursor: pointer;
    font-family: ${colors.text};
    font-size: 15px;
    color: ${colors.black};
  }
`;
