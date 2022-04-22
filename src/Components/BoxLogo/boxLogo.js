import styled from "styled-components";
import { colors } from "../../Style/globalStyle";

export const Box = styled.div`
  width: 35%;
  height: 40%;
  margin-left: 40px;

  > img {
    min-height: 160px;
    min-width: 400px;
    max-width: 100%;
    object-fit: cover;
    filter: drop-shadow(2px 3px 5px ${colors.black});
  }
`;
