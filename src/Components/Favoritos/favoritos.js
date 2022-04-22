import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Favorito = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.contrast};

  > h3 {
    font-family: ${colors.titles};
    color: ${colors.red};
    text-transform: uppercase;
    font-weight: 500;
  }
`;
