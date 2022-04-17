import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const btnLivreiro = styled.div`
  width: 150px;
  height: 75px;
  background-color: ${colors.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }

  .link {
    color: ${colors.white};
    text-decoration: none;
    font-family: ${colors.text};
    text-transform: uppercase;
    font-size: 14px;
  }
`;
