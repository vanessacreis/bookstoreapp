import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Login = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 25px;
  background-color: ${colors.contrast};
  color: ${colors.black};
  font-family: ${colors.text};
  font-size: 15px;
  border-style: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px;
  align-self: center;
  cursor: pointer;
`;
