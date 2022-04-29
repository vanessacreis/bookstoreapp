import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const btnLivreiro = styled.button`
  width: 150px;
  height: 75px;
  background-color: ${colors.orange};
  font-family: ${colors.text};
  text-transform: uppercase;
  border: none;
  color: ${colors.white};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`;
