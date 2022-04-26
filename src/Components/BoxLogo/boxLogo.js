import styled from "styled-components";
import { colors } from "../../Style/globalStyle";

export const Box = styled.div`
  width: 35%;
  height: 40%;
  margin-left: 40px;
  position: absolute;

  > img {
    min-height: 160px;
    min-width: 400px;
    max-width: 100%;
    object-fit: cover;
    /* filter: drop-shadow(10px 10px 10px ${colors.black}); */
  }
`;
