import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Form = styled.form`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > select {
    height: 30px;
    width: 80%;
    border-top: none;
    border-right: none;
    border-left: none;
    color: ${colors.red};
    font-size: 15px;
    padding: 5px;
    margin-bottom: 15px;
  }

  > input {
    height: 30px;
    width: 80%;
    border-top: none;
    border-right: none;
    border-left: none;
    color: ${colors.red};
    font-size: 15px;
    padding: 5px;
  }
`;

export const Botao = styled.div`
  margin-top: 25px;
  width: 100px;
  height: 30px;
  background-color: ${colors.contrast};
  color: ${colors.black};
  font-family: ${colors.text};
  font-size: 15px;
  text-align: center;
  border-style: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px;
  align-self: center;
  cursor: pointer;
`;
