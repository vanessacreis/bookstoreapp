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
