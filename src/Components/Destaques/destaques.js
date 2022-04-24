import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Destaque = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0;

  > h1 {
    width: 85%;
    font-size: 26px;
    font-family: ${colors.titles};
    color: ${colors.red};
    font-weight: lighter;
  }

  > div {
    width: 85%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 23%);
    gap: 3%;
  }

  @media (max-width: 600px) {
    height: auto;
    > div {
      grid-template-columns: repeat(2, 50%);
    }
  }
`;
